import React from 'react'
import { useState } from 'react';

const App = () => {
  
  const api=async()=>{
    const data=await fetch('https://jsonplaceholder.typicode.com/users')
    console.log(data);

    let finalData=await data.json();
    console.log(finalData);
  }
  api();

  const[data,setData]=useState([]);

  
  return (
    <div>
      <button >Get a Data</button>
      {

      }
    </div>
  )
}

export default App
