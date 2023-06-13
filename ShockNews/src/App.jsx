import React from 'react'
import {Navbar} from "./components/Navbar";
import "./App.scss"

export function App() {
  return (
    <div>
        <Navbar/>
        <div className='banner'>
        <h2>Votre dose d'actualité shock</h2>
      </div>
    </div>
  )
}

export default App