import React, { useEffect, useState } from 'react'

const App = () => {

  const [num,setNum]=useState(0);
  const [num2,setNum2]=useState(0);

  useEffect(()=>{
    console.log("useEffect is running");
  },[num])
  return (
    <div>
      <h1>Value is {num}  and {num2}</h1>
      <button onClick={()=>{setNum(num+1)}} onDoubleClick={()=>{setNum2(num2+4)}}>Click</button>
    </div>
    
  )
}

export default App
