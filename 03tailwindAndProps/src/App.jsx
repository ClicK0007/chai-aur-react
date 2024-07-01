import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "hitesh",
    age: 21
  }
  let newArr = [1, 2, 3]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      {/* 
        <Card username="chaiaurcode" myObj = {username: "hitesh",age: 21} /> 
        <Card username="chaiaurcode" myArr = [1,2,3,4] /> 
        // You cannot pass direct object or array you have to store in variable
      */}
      <Card username="chaiaurcode" btnText="click me" /> {/* Passing PROPS */}
      <Card username="hitesh" />
    </>
  )
}

export default App
