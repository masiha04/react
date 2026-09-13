import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {

  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>

      <Card name="prop">
        <h1>Best web development</h1>
        <p>trying to be consistent in this</p>
        <p>will complete this in few days</p>
      </Card>

      <Card>
        hello jii
      </Card>

      <Button handleClick={handleClick} text="clickme">
      </Button>

      <h1>{count}</h1>

    </div>
  )
}

export default App