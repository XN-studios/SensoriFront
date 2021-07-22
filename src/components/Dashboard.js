import { useState, useEffect } from 'react'
import React from 'react'
import Button from './Button'
import Entries from './Entries'
import LineChart from './LineChart'
import { Card, Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { Link, useHistory } from 'react-router-dom'

export default function Dashboard() {

  const { currentUser, logout } = useAuth()
  const [error, setError] = useState('')
  const history = useHistory()

  async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Logout unsuccessful')
    }
  }

  const [showEntries, setShowEntries] = useState(true)
  const [entries, setEntries] = useState([])
  const [entryTitle, setEntryTitle] = useState()
  const [times, setTimes] = useState([])
  const [oxy, setOxy] = useState([])
  const [co2, setCo2] = useState([])
  const [temp, setTemp] = useState([])


  useEffect(() => {
    const getEntries = async () => {
      const entriesFromServer = await fetchEntries()
      setEntries(entriesFromServer)
    }

    getEntries()
  }, [])


  // Fetch Entries for One User
  const fetchEntries = async () => {
    const res = await fetch('http://localhost:4000/users/1')
    const data = await res.json()
    return data.entries
  }


  // Fetch more specific data
  const fetchEntry = async (id) => {

    setShowEntries(!showEntries)

    const res = await fetch(`http://localhost:4000/users/1`)
    const data = await res.json()

    const title = data.entries[id-1].label
    setEntryTitle(title)

    const times = [data.entries[id-1].results[0].time,
                    data.entries[id-1].results[1].time,
                    data.entries[id-1].results[2].time]
    setTimes(times)
    // console.log(times)

    const oxy = [data.entries[id-1].results[0].oxygen,
                    data.entries[id-1].results[1].oxygen,
                    data.entries[id-1].results[2].oxygen]
    setOxy(oxy)
    // console.log(oxy)

    const co2 = [data.entries[id-1].results[0].CO2,
                    data.entries[id-1].results[1].CO2,
                    data.entries[id-1].results[2].CO2]
    setCo2(co2)
    // console.log(co2)

    const temp = [data.entries[id-1].results[0].temperature,
                    data.entries[id-1].results[1].temperature,
                    data.entries[id-1].results[2].temperature]
    setTemp(temp)
    // console.log(temp)
  }

  return (
    <div className="container">
      {showEntries ?
        (entries.length > 0 ?
          <>
            <Card>
              <Card.Body>
                {error && <Alert variant='danger'> {error} </Alert>}
                <strong>Email: {currentUser.email}</strong>
                <Link to='/update-profile' style={{ color: 'green', textDecoration: 'none' }}>Update Credentials</Link>
              </Card.Body>
            </Card>
            <Entries entries={entries}
            onClick={fetchEntry}/>
          </>
          : 'No entries to show.')
          : <div>
          <Button text="Back to all entries" onClick={() => setShowEntries(!showEntries)} buttonStyle={{float: 'right', backgroundColor: 'rgb(64, 168, 50)'}}/>
          <br></br>
          <br></br>
          <div>
            <h2>{entryTitle}</h2>
            <br></br>
            <LineChart times = {times} oxy = {oxy} 
            co2 = {co2} temp = {temp} />
          </div>
        </div> }
      <div className="text-center mt-2">
        <Button text="Log Out" variant="link" onClick={handleLogout} buttonStyle={{backgroundColor: 'rgb(64, 168, 50)'}}/>
      </div>
    </div>
  )
}
