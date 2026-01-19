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
        <textarea
        type='text'
        placeholder='add notes'
        value={name}
        onChange={(e)=>{setName(e.target.value); }}
        rows={10}
        cols={50}
        />
        <button>Add</button>
      </form>
      {
        show.map(function(s,id){
            return <div className='card' key={id} >
              <div className='card-text'>
                <h2>{s}</h2>
              </div>
            </div>
        })
      }


    </div>
  )
}

export default Header
