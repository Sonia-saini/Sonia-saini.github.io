import React from 'react'
import { MdHome } from 'react-icons/md'


import { Route, Routes } from 'react-router-dom'
import About from '../component/About'
import Contact from '../component/Contact'
import Home from '../component/Home'
import Skills from '../component/Skills'

function Allroutes() {
  return (
    <div>
        <Routes>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/" element={<Home/>} ></Route>
            <Route path="/projects"></Route>
                <Route path="/skills" element={<Skills/>}></Route>
                <Route path="/contact" element={<Contact/>} ></Route>
                
            
        </Routes>
    </div>
  )
}

export default Allroutes