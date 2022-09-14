import * as React from 'react'
import { useState } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { registerUser } from '../api/userApi'
import { useAppDispatch, useAppSelector } from '../store/store'

const NameField = ({
  setFirstName,
  setLastName
}: {
  setFirstName: any
  setLastName: any
}) => {
  const onFirstNameChange = (event: { target: { value: any } }) => {
    setFirstName(event.target.value)
  }

  const onLastNameChange = (event: { target: { value: any } }) => {
    setLastName(event.target.value)
  }

  return (
    <Row className="mb-3">
      <Col>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>First Name:</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter first name"
            onChange={onFirstNameChange}
          />
        </Form.Group>
      </Col>
      <Col>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Last Name:</Form.Label>
          <Form.Control
            type="name"
            placeholder="Enter surname"
            onChange={onLastNameChange}
          />
        </Form.Group>
      </Col>
    </Row>
  )
}

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

const Register = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()

  const { register, handleSubmit } = useForm()
  const error = useAppSelector((state) => state.user.error)
  const submitForm = () => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password
    }
    data.email = data.email.toLowerCase()
    const baseUrl = 'https://8y6w07.sse.codesandbox.io/register'
    dispatch(registerUser(data))
  }
  return (
    <>
      {error === 'User already exists!' ? (
        <div>User already exists!</div>
      ) : (
        <Form>
          <Container>
            <NameField setFirstName={setFirstName} setLastName={setLastName} />
            <EmailField setEmail={setEmail} />
            <PasswordField setPassword={setPassword} />
            <SubmitButton handleSubmit={handleSubmit(submitForm)} />
          </Container>
        </Form>
      )}
    </>
  )
}

export default Register
