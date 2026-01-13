import React from 'react'

import Hero from './Hero'
import Arrow from './Arrow'
const LeftContent = () => {
  return (
    <div className='h-full flex flex-col w-1/3 justify-between'>
      <Hero/>
      <Arrow/>
    </div>
  )
}

export default LeftContent
