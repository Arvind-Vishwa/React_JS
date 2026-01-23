import axios from 'axios'
import React, { useEffect, useState } from 'react'

const App = () => {
  const [userdata,setUserData]=useState([]);
  const [index,setIndex]=useState(1);
  const getData=async ()=>{
    const res=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`);
    // console.log(res.data);
    setUserData(res.data);
  }

  useEffect(function(){
    getData();
  },[index])

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if(userdata.length > 0){
    printUserData=userdata.map(function(el,idx){
      return <div key={idx}>
        <a href={el.url} target='_blank'>
        <div className='h-40 w-44 overflow-hidden bg-white rounded-xl'>
        <img className='h-full w-full object-cover' src={el.download_url} alt='img'/>
        </div>
        <h2 className='font-bold text-md'>{el.author}</h2>
        </a>
      </div>
    })
    
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      {/* <button 
      onClick={getData}
      className='bg-green-600 mb-3 active:scale-70 text-white px-5 py-2 rounded'>get Data</button> */}
      <div className='flex flex-wrap gap-3 p-2'>
        {printUserData}
      </div>

      <div className='flex justify-center items-center p-4 gap-3'>
        
        <button 
        onClick={()=>{
          if(index > 1){
            setIndex(index-1);
            setUserData([]);
          }
        }}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2'>Prev</button>
        <button
        onClick={()=>{setUserData([]) 
              setIndex(index+1)}}
        className='bg-amber-400 text-sm cursor-pointer active:scale-95 text-black rounded px-4 py-2'>Next</button>
      </div>
    </div>
  )
}

export default App
