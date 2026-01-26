import React, { useState } from 'react'
import Navabr from './component/Navabr'

const App = () => {
  const[theme,setTheme]=useState('light');
  return (
    <div>
      <h1>At parent level ::{theme}</h1>
      <Navabr theme={theme} setTheme={setTheme} />
    </div>
  )
}

export default App
