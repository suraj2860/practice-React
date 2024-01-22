import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UserContext from './contexts/UserContext'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './contexts/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
      <UserContextProvider>
        <h1>Chai aur React</h1>
        <Login />
        <Profile />
      </UserContextProvider>
  )
}

export default App;
