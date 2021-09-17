import React, { useRef, useState } from 'react'
import {Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link } from 'react-router-dom'

export default function ForgotPassword() {
    const emailRef = useRef()
    const { resetPassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    async function handleSubmit(e) {
        e.preventDefault()

        try {
            setError("")
            setMessage("")
            setLoading(true)
            await resetPassword(emailRef.current.value)
            setMessage('Controlla la tua mailbox per ulteriori istruzioni')
        } catch(error) {
            setError('Invio della mail fallito.')
        }
        
        setLoading(false)

    }

    return (
        <div>
            <Card className="log-in">
                <Card.Body>
                    <h2 className="text-center mb-4">Password Reset</h2>
                    <Form onSubmit={handleSubmit}>
                        {error && <Alert variant="danger">{error}</Alert>}
                        {message && <Alert variant="success">{message}</Alert>}
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required />
                        </Form.Group>
                        <br></br>
                        <Button disabled={loading} className="w-100" type="submit">Invia Link</Button>
                    </Form>
                    <div className="text-center mt-2">
                        <Link to="/login">Torna al login</Link>
                    </div>
                </Card.Body>
            </Card>
            <div className="text-center mt-2">
                Non hai ancora un account?<Link to='/signup'>Creane uno</Link>
            </div>
        </div>
    )
}

