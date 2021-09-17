import React from 'react'
import { useAuth } from '../contexts/AuthContext'
import { Link } from 'react-router-dom'

const Header = () => {

    const { currentUser } = useAuth()

    return (
        <header className='header'>
            <h1>Charter</h1>
            {currentUser ?
                <div className='session-head'>
                    {/* {error && <Alert variant='danger'> {error} </Alert>} */}
                    {/* <strong>Email: {currentUser.email}</strong> */}
                    <Link to='/update-profile' style={{ color: 'green', textDecoration: 'none' }}>Modifica credenziali</Link>
                </div> :
                <></>
            }
        </header>
    )
}

export default Header
