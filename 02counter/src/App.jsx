import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(0)

  //let counter = 0

  const addValue = () => {
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    setCounter(counter + 1)
    // WHAT WILL BE THE OUTPUT OF THE FOLLOWING CODE WILL COUNTER WILL BE INCREMENTD BY 4 OR BY 1 ONLY??
    // THE COUNTER WILL BE UPDATED BY ONE ONLY "#"

    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1 )
    setCounter(prevCounter => prevCounter + 1)
    setCounter(prevCounter => prevCounter + 1)
    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button
      onClick={addValue}
      >Add value {counter}</button> 
      <br />
      <button
      onClick={removeValue}
      >remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  )
}

export default App


/*

In React, state updates are asynchronous, and they are often batched for performance reasons. When you call setCounter(counter + 1) multiple times in succession within the same synchronous event, React will batch these updates and only apply the final state.

Explanation
In the given code:

setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
setCounter(counter + 1);
Each call to setCounter receives the same counter value because the state updates are not applied immediately. Instead, React batches these updates and only applies them after the current synchronous code execution is finished.

Step-by-Step Breakdown
Initial State: Suppose counter is initially 0.
First Call: setCounter(counter + 1) sets the state to 1, but this update is not applied immediately.
Second Call: setCounter(counter + 1) again sets the state to 1 (since counter is still 0 in this synchronous context).
Third Call: setCounter(counter + 1) again sets the state to 1.
Fourth Call: setCounter(counter + 1) again sets the state to 1.
Since all these state updates are batched, React only applies the last update, resulting in counter being incremented by 1 in total.

Using Functional Updates
To ensure each increment is based on the latest state, you should use the functional form of the state setter:

setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
setCounter(prevCounter => prevCounter + 1);
In this case, each update is based on the previous state, so counter will be incremented by 4.

Summary
Batching Updates: React batches state updates for performance, and synchronous calls to the state setter with the same state value will result in the final state being applied once.
Functional Updates: Using the functional form of the state setter ensures that each update is based on the latest state, allowing multiple updates to accumulate correctly.
So, in the initial code example, counter will be incremented by 1 only. To increment it by 4, use the functional update form.
*/ 