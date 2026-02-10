import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'
import Editor from './pages/Editor'

function App() {

  return (
    <div className="flex h-screen overflow-hidden relative">
      <SideBar />
      <Editor />
    </div>
  )
}

export default App
