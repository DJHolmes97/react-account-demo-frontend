import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import { Login } from './components/Login'
import { Logout } from './components/Logout'
import Register from './components/Register'
import { useAppSelector } from './store/store'

export default function App() {
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn)
  return (
    <BrowserRouter>
      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            {!isLoggedIn && <Nav.Link href="/register">Register</Nav.Link>}
            {!isLoggedIn && <Nav.Link href="/login">Log In</Nav.Link>}
            {isLoggedIn && <Nav.Link href="/logout">Log Out</Nav.Link>}
          </Nav>
        </Container>
      </Navbar>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
