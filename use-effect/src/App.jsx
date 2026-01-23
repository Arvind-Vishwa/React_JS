import React, { useEffect, useState } from 'react'

const App = () => {
  const[a,setA]=useState(0);
  const [b,setB]=useState(0);

  function aChange(){
    console.log("a is changing");
  }
  function bChange(){
    console.log("b is changing");
  }

  useEffect(function(){
    
    aChange();
},[a]);
useEffect(function(){
    
  bChange();
},[b])
  // useEffect(function(){
  //   console.log("useffect called");
  // })
  // if I doen't give [] in useEffect it called again and again chnging in simple state

  return (
    <div>
      <h1>Value is {a} and {b}</h1>
      <button onClick={()=>{setA(a+1)}}>+ A</button>
      <button onClick={()=>{setB(b-1)}}>- B</button>
    </div>
  )
}

export default App
