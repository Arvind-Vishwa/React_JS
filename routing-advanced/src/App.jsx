import React from 'react'
import {Routes,Route} from 'react-router-dom';
import Navbar from './component/Navbar'
import Footer from './component/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound';
import Men from './pages/Men';
import Women from './pages/Women';
import AboutDetail from './pages/AboutDetail';

const App = () => {
  return (
    <div className='h-screen bg-black text-white'>
      <Navbar/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/about' element={<About />} />
        <Route path='/about/:id' element={<AboutDetail />}/>
        
        <Route path='/contact' element={<Contact/>}>
        
        <Route path='client' element={<Men />}/>
        <Route path='company' element={<Women />}/>

        </Route>


        {/* <Route path='/contact/client' element={<Men />}/>
        <Route path='/contact/company' element={<Women />}/> */}
        <Route path='*' element={<NotFound />}/>
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App
