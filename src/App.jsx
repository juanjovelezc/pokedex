import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TopBar from './components/TopBar'
import PokeList from './components/PokeList'
import BottomBar from './components/BottomBar'

function App() {


  return (
    <div className="pp">
        <TopBar/>
        <PokeList/>
        <BottomBar/>
    </div>
  )
}

export default App
