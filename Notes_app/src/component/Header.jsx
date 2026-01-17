import React, { useState } from 'react'
import { Plus } from 'lucide-react';
const Header = () => {

    const[show,setShow]=useState(['arvind','suraj']);
    const[name,setName]=useState('');

    const handleSubmit=(e)=>{
        e.preventDefault();

        setShow([...show,name])
        setName('');
        console.log(name);
    }
  return (
    <div>
      <div className='header'>
        <h1>Notes App</h1>
        <h2>Add Notes  <button><Plus /></button></h2>
        
      </div>
      <form onSubmit={handleSubmit}>
        <input
        type='text'
        placeholder='add notes'
        value={name}
        onChange={(e)=>{setName(e.target.value); }}
        />
        <button>Add</button>
      </form>
      {
        show.map(function(s,id){
            return <h2 key={id}>{s}</h2>
        })
      }


    </div>
  )
}

export default Header
