import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  //console.log("Rendering 'root' div in StrictMode. Called from main.jsx.")
  <StrictMode>
    <App />
  </StrictMode>,
)
