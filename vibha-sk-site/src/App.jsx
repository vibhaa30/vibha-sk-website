import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import './site-styles.css'
import Navbar from './Navbar'
import Home from './pages/Home'
import Leadership from './pages/Leadership'
import Research from './pages/Research'
import { Route, Routes } from "react-router-dom"

function App() {
  console.log(window.location)
  return (
    <>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path= "/" element={<Home />}/>
          <Route path="/research" element={<Research />}/>
          <Route path="/leadership"element={<Leadership />}/>

        </Routes>
      </div>

    </>

  )
      
}
        //</>/* <h1 className='top_left'>Vibha Sathish Kumar</h1> */


export default App
