import * as React from 'react'
import { useState, useEffect } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { loginUser } from '../api/userApi'
import {
  useAppDispatch,
  useAppSelector,
  useThunkDispatch
} from '../store/store'

const EmailField = ({ setEmail }: { setEmail: any }) => {
  const onEmailChange = (event: { target: { value: any } }) => {
    setEmail(event.target.value)
  }
  return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address: </Form.Label>
      <Form.Control
        type="email"
        placeholder="Enter email"
        onChange={onEmailChange}
      />
    </Form.Group>
  )
}

const PasswordField = ({ setPassword }: { setPassword: any }) => {
  const onPasswordChange = (event: { target: { value: any } }) => {
    setPassword(event.target.value)
  }
  return (
    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password: </Form.Label>
      <Form.Control
        type="password"
        placeholder="Password"
        onChange={onPasswordChange}
      />
    </Form.Group>
  )
}

const SubmitButton = ({ handleSubmit }: { handleSubmit: any }) => {
  return (
    <Button variant="primary" type="submit" onClick={handleSubmit}>
      Submit
    </Button>
  )
}

export const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loggedInAttempted, setLoggedInAttempted] = useState(false)
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)

  const dispatch = useThunkDispatch()
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm()
  const error = useAppSelector((state) => state.user.error)
  useEffect(() => {
    setLoggedInAttempted(false)
    if (isLoggedIn) {
      return navigate('/home')
    }
  }, [isLoggedIn])
  const submitForm = () => {
    const data = {
      email: email,
      password: password
    }
    data.email = data.email.toLowerCase()
    dispatch(loginUser(data))
    setLoggedInAttempted(true)
    if (isLoggedIn) {
      return navigate('/home')
    }
  }
  return (
    <Form>
      <Container>
        <EmailField setEmail={setEmail} />
        <PasswordField setPassword={setPassword} />
        <SubmitButton handleSubmit={handleSubmit(submitForm)} />
      </Container>
    </Form>
  )
}
