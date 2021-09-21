import React, { useRef, useState } from 'react'
import {Form, Button, Card, Alert } from 'react-bootstrap'
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from 'react-router-dom'


export default function UpdateProfile() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const { currentUser, updateEmail, updatePassword } = useAuth()
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const history = useHistory()

    
    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== passwordConfirmRef.current.value) {
            return setError('Le due password non corrispondono.')
        }

        const promises = []
        setLoading(true)
        setError('')
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value) {
            promises.push(updatePassword(passwordRef.current.value))
        }


        Promise.all(promises).then(() => {
            history.push('/SensoriFront')
        }).catch(() => {
            setError('Modifica dell\'account fallita.')
        }).finally(() => {
            setLoading(false)
        })

    }

    return (
        <div>
            <Card className="log-in">
                <Card.Body>
                    <h2 className="text-center mb-4">Update Profile</h2>
                    <Form onSubmit={handleSubmit}>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Form.Group id="email">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" ref={emailRef} required
                            defaultValue={currentUser.email}/>
                        </Form.Group>
                        <Form.Group id="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" ref={passwordRef}
                            placeholder="Leave blank to keep the same"/>
                        </Form.Group>
                        <Form.Group id="password-confirm">
                            <Form.Label>Conferma password</Form.Label>
                            <Form.Control type="password" ref={passwordConfirmRef}
                            placeholder="Leave blank to keep the same"/>
                        </Form.Group>
                        <br></br>
                        <Button disabled={loading} className="w-100" type="submit">Update Profile</Button>
                    </Form>
                </Card.Body>
            </Card>
            <div className="text-center mt-2">
                <Link to='/SensoriFront'>Annulla</Link>
            </div>
        </div>
    )
}

