import React from 'react'
import { useNavigate } from 'react-router-dom'

const About = () => {

  const navigate=useNavigate();

  return (
    <div className='text-xl font-size-bold'>
      <button
      className='font-size-xl bg-green-500 text-color-white-700 cursor-pointer'
      onClick={()=>{navigate('/home')}}
      >
        Return To Home
      </button>
    <br/>
      <button
      className='font-size-xl bg-green-500 text-color-white-700 cursor-pointer'
      onClick={()=>{navigate(-1)}}
      >
        Back
      </button>
      <br/>
      <button
      onClick={()=>{useNavigate(+1)}}
      className='bg-yellow-600 rounded cursor-pointer'
      >
      Next
      </button>
      About
    </div>
  )
}

export default About
