import { useState } from 'react'
import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import {Login} from './Components/Login'
import { Home } from './Components/Home'
import { Signup } from './Components/Signup'
import { Navbar } from './Components/Navbar'

function App() {
    return (
       <>
       <BrowserRouter>
       <Navbar/>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
       </Routes>
       </BrowserRouter>
       </>
    )
}

export default App