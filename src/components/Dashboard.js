import { useState, useEffect } from 'react'
import React from 'react'
import Button from './Button'
import Entries from './Entries'
import { Alert } from 'react-bootstrap'
import { useAuth } from '../contexts/AuthContext'
import { useHistory } from 'react-router-dom'
import ChartPage from './ChartPage'
import database from '../db'

export default function Dashboard() {

  const { logout } = useAuth()
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
  const [val1, setVal1] = useState([])
  const [val2, setVal2] = useState([])
  const [val3, setVal3] = useState([])
  const [val4, setVal4] = useState([])
  const [val5, setVal5] = useState([])
  const [val6, setVal6] = useState([])
  const [val7, setVal7] = useState([])
  const [val8, setVal8] = useState([])
  // const [val9, setVal9] = useState([])
  // const [val10, setVal10] = useState([])


  useEffect(() => {
    
    const getEntries = async () => {
      const entriesFromServer = await fetchEntries()
      setEntries(entriesFromServer)
    }

    getEntries()
  }, [])


  // Fetch Entries for One User
  const fetchEntries = async () => {

    // const getUserFromUid = function (array, key, value) {
    //   const filtered = array.filter(function (object) {
    //     return object[key] === value
    //   })
    //   return filtered[0]
    // }
  
    // const userData = getUserFromUid(database.users, "uid", currentUser.uid)
    
    
    // ^^^ Questo è il codice per seleczionare i contenuti di un account


    return database.users[0].entries
  }


  // Fetch more specific data
  const fetchEntry = async (id) => {

    setShowEntries(!showEntries)

    const data = database.users[0]

    const title = data.entries[id-1].label
    setEntryTitle(title)

    const val1 = data.entries[id-1].results.map(function(elem) {
      return elem.date
    })
    setVal1(val1)

    const val2 = data.entries[id-1].results.map(function(elem) {
      return elem.time
    })
    setVal2(val2)

    const val3 = data.entries[id-1].results.map(function(elem) {
      return elem.CF_LINE_1
    })
    setVal3(val3)

    const val4 = data.entries[id-1].results.map(function(elem) {
      return elem.THI_1
    })
    setVal4(val4)

    const val5 = data.entries[id-1].results.map(function(elem) {
      return elem.CF_LINE_2
    })
    setVal5(val5)

    const val6 = data.entries[id-1].results.map(function(elem) {
      return elem.THI_2
    })
    setVal6(val6)

    const val7 = data.entries[id-1].results.map(function(elem) {
      return elem.RH
    })
    setVal7(val7)

    const val8 = data.entries[id-1].results.map(function(elem) {
      return elem.RH
    })
    setVal8(val8)

  }

  return (
    <div className="container">
      {showEntries ?
        <>
          {error && <Alert variant='danger'> {error} </Alert>}
          {entries.length > 0 ?
            <>
              <Entries entries={entries}
              onClick={fetchEntry}/>
            </>
            : 'No entries to show.'}
        </>
        : <>
          <ChartPage title = {entryTitle} onClick = {() => setShowEntries(!showEntries)} 
          val1 = {val1} val2 = {val2} val3 = {val3} val4 = {val4} 
          val5 = {val5} val6 = {val6} val7 = {val7} val8 = {val8} 
          // val9 = {val9} val10 = {val10} 
          />
        </> }
      <div className="text-center mt-2">
        <br></br>
        <br></br>
        <br></br>
        <Button text="Log Out" variant="link" onClick={handleLogout} buttonStyle={{backgroundColor: 'rgb(64, 168, 50)'}}/>
      </div>
    </div>
  )
}
