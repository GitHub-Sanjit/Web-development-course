import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const handleAdd = () => {
    const newCount = count + 1;
    setCount(newCount)
  }

  const handleReduct = () => {
    const newCount = count - 1;
    setCount(newCount)
  }

  return (
    <>
      <div style={{border:'2px solid yellow'}}>
        <h3>Counter :{ count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handleReduct}>Reduce</button>
      </div>
    </>
  )
}

export default App
