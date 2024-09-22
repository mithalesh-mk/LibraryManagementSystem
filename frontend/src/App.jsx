import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './Pages/LoginPage'
import Sidebar from './Components/Sidebar/SIdeBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex">
      <Sidebar />
    </div>
    </>
  )
}

export default App
