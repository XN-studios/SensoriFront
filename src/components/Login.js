import React, { useRef, useState } from 'react'
import { Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory, Redirect } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const { currentUser, login } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    async function handleSubmit(e) {
        e.preventDefault();

        try {
            setError("")
            setLoading(true)
            await login(emailRef.current.value, passwordRef.current.value)
            history.push('/')
        } catch(error) {
            setError('Log in fallito.')
        }
        
        return () => {
            setLoading(false);
        }

    }

    return (
        <>
            {currentUser ?
            <Redirect to="/" /> :
            <div>
                <Card className="log-in">
                    <Card.Body>
                        <h2>Log In</h2>
                        <Form onSubmit={handleSubmit}>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <Form.Group id="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" ref={emailRef} required />
                            </Form.Group>
                            <Form.Group id="password">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" ref={passwordRef} required />
                            </Form.Group>
                            <br></br>
                            <Button disabled={loading} className="w-100" type="submit">Log In</Button>
                        </Form>
                        <div className="text-center mt-2">
                            <Link to="/forgot-password">Password dimenticata?</Link>
                        </div>
                    </Card.Body>
                </Card>
                <div className="text-center mt-2">
                    Non hai ancora un account?<Link to='/signup'>Creane uno</Link>
                </div>
            </div>}
        </>
    )
}

