import React from 'react'
import { useState } from 'react';
import axios from 'axios';
const App = () => {
  
  // const api=async()=>{
  //   const data=await fetch('https://jsonplaceholder.typicode.com/users')
  //   console.log(data);

  //   let finalData=await data.json();
  //   console.log(finalData);
  // }
  // api();

  // const[data,setData]=useState([]);


  // using a AXIOS
  const[data,setData]=useState([]);
  const getData=async ()=>{
    const {data}=await axios.get('https://jsonplaceholder.typicode.com/users');
    // console.log(data);
    setData(data);
  }
  
  return (
    <div>
      <button onClick={getData}>Get a Data</button>
      {
        data.map(function(e,idx){
          return <div key={idx}>
            <h1 style={{backgroundColor:"pink"}}>{e.name}</h1>
            <h2>{e.username}</h2>
            <h3>{e.email}</h3>
          </div>
        })
      }
    </div>
  )
}

export default App
