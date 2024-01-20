import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0);


  const increase = () => {
    if (counter < 20) setCounter(counter + 1);
    else
      alert("counter maximum limit reached")
  }

  const decrease = () => {
    if (counter > 0) setCounter(counter - 1);
    else
      alert("counter minimum limit reached")


  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increase}>increment {counter}</button>
      <br />
      <br />
      <button onClick={decrease}>decrement {counter}</button>
      <br />
      <br />


    </>
  )
}

export default App
