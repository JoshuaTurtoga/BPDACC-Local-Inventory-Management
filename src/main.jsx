/**
 * BPDACC Inventory Management System - Entry Point
 * Initializes and renders the React application
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Render the application to the DOM
 * StrictMode helps identify potential problems in the application
 */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
