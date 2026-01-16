import React from 'react'

const App = () => {
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log("submitted")
  }
  const handleChange=(e)=>{
    console.log(e.target.value)
  }
  return (
    
    <div>
      <form onSubmit={handleSubmit}>
        <input
        placeholder='Enter name'
        type='text'
        
        onChange={handleChange}
        />
        <button >Submit</button>
      </form>
    </div>
  )
}

export default App
