import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link,useLocation } from 'react-router-dom'
import Button from './Button'
import { useState, useEffect } from 'react'
import { useHistory, Redirect } from 'react-router-dom'
import database from '../db'


const Header = () => {
const location = useLocation();

const [error, setError] = useState('')
const history = useHistory()
const { currentUser, logout } = useAuth()

async function handleLogout() {
    setError('')

    try {
      await logout()
      history.push('/login')
    } catch {
      setError('Logout fallito')
    }
  }
    

    return (
        <header className='header'>
            
            {currentUser ?<>
              <h1 style={{margin:'0 1rem'}}>Charter</h1>
                <div className='session-head'>
                    {/* {error && <Alert variant='danger'> {error} </Alert>} */}
                    {/* <strong>Email: {currentUser.email}</strong> */}
                    
                    {location.pathname !== '/about' && currentUser ?
                      <><Link to="/about" style={{ color: 'black', textDecoration: 'none' }}>About</Link><span style={{margin: "0 1rem"}}></span></> :
                      <></>}
                    <Link to='/update-profile' style={{ color: 'black', textDecoration: 'none' }}>Modifica credenziali</Link>
                    <Button text="Log Out" variant="link" onClick={handleLogout} buttonStyle={{backgroundColor: 'skyblue'}}/>

                </div></> :
                <></>
            }
        </header>
    )
}

export default Header
