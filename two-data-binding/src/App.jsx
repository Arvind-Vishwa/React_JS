import React, { useState } from 'react'

const App = () => {
  const[name,setName]=useState('');

  const handleChange=(e)=>{
    setName(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(name);
    setName('');
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
        placeholder='Enter the name'
        type='text'
        value={name}
        onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App
