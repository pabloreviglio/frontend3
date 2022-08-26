import { useState } from 'react'

export const Class7 = () => {
  const [count, setCount] = useState(0)
  // useState => [estado, modificadorEstado()]
  // muy facil lo de hoy, mejor practicamos useState 😎

  function add () {
    setCount(count + 1)
  }
  function decrement () {
    if (count - 1 < 0) {
      return
    } else {
      setCount(count - 1)
    }
  }
  function reset () {
    setCount(0)
  }
  return (
    <div className='App'>
      <h1>{count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={add}>+</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
}
