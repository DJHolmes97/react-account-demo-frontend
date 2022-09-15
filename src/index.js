import React from 'react'
import { StrictMode } from 'react'
import { Container } from 'react-bootstrap'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'

import App from './App'

const rootElement = document.getElementById('root')
const root = createRoot(rootElement)

root.render(
  <StrictMode>
    <Container>
      <App />
    </Container>
  </StrictMode>
)
