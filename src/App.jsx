import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="page">
      <h1>QA Test App</h1>
      <p>This is a simple page for testing.</p>
      <button className="click-button" onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <p className="counter">Clicked {count} times</p>
    </main>
  )
}

export default App
