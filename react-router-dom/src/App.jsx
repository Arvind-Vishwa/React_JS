import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import {Routes,Route} from 'react-router-dom';
import Contact from './pages/Contact';
import Navbar from './component/Navbar.jsx';
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
    </div>
  )
}

export default App
