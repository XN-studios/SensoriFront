import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import About from './components/About'
import Button from './components/Button'
import Entries from './components/Entries'
import LineChart from './components/LineChart'
import React from 'react' 


function App() {
  const [showEntries, setShowEntries] = useState(true)
  const [entries, setEntries] = useState([])
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


  // const fetchEntry = async (id) => {

  //   setShowEntries(!showEntries)

  //   // const res = await fetch(`http://localhost:4000/users/1`)
  //   // const data = await res.json()

  //   const getValues = async () => {
  //     const valuesFromObject = await fetchEntries()
  //     const results = valuesFromObject[id-1].results
  //     setValues(results)
  //   }
    
  //   getValues()
    
  //   // setValues(data.entries[id-1].results)

  // }

  return (
    <Router>
      <div>
        <Header />
        <Route path="/login" render={() => (
          <>
            <div className='log-in'>
              <h1>Log In</h1>
            </div>
          </>
        )} />
        <Route path="/" exact render={() => (
            <>
              {showEntries ?
                (entries.length > 0 ?
                <Entries entries={entries}
                onClick={fetchEntry}/>
                : 'No entries to show.')
                : <div>
                  <Button onClick={() => setShowEntries(!showEntries)} />
                  <br></br>
                  <br></br>
                  <div>
                    {JSON.stringify(times)}<br></br>
                    {JSON.stringify(oxy)}<br></br>
                    {JSON.stringify(co2)}<br></br>
                    {JSON.stringify(temp)}<br></br>
                    <LineChart times = {times} oxy = {oxy} 
                    co2 = {co2} temp = {temp} />
                  </div>
                </div> }
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
