import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Vite + React</h1>
      <Person></Person>
      <Person></Person>
      <Person></Person>
      <Student></Student>
    </>
  )
}

function Person() {
  const age = 24
  return <h3>I am a person age: { age}</h3>
}

function Student() {
  return <div>
    <h3>This is a student</h3>
    <p>Name: </p>
  </div>
}

// conditional rendering 3
export function Todo({ task, isDone }) {
  return (
    <li>{isDone ? 'Finished' : 'workon'}:{ task}</li>
  )
}

export default App
