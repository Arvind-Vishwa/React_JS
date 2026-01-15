import React, { useState } from 'react'

const App = () => {
  const[num,setNum]=useState(0);
  function handleIncrement(){
    setNum(num+1);
  }

  function handleDecrement(){
    setNum(num-1);
  }
  return (
    <div>
      <h1>UseState {num}</h1>
      <button onClick={handleIncrement}>Add</button>
      <button onClick={handleDecrement}>Sub</button>
    </div>
  )
}

export default App
