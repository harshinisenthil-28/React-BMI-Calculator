import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Bmi from './components/bmi'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Bmi/>
    </>
  )
}

export default App
