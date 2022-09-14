import { Container, Nav, Navbar } from 'react-bootstrap'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register'
import { store } from './store/store'

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar bg="light" variant="light">
          <Container>
            <Navbar.Brand href="/home">Navbar</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/register">Register</Nav.Link>
              <Nav.Link href="/login">Log In</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        <div className="App">
          <h1>Hello CodeSandbox</h1>
          <Routes>
            <Route path="/home" element={<h1>Home</h1>} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<h1>Log In</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  )
}
