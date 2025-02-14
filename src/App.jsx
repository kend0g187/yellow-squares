import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  console.log("Rendering App component. Called from App.jsx.")
  return (
    <div className="App">
      <nav>
        <h1>Yellow Squares</h1>
      </nav>
      <div className='Components'>
        {/* components go here */}
      </div>
    </div>
  );
}

export default App
