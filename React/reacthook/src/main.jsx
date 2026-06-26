import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BowserRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </BowserRouter>,
)
