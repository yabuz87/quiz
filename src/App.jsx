import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from "./components/Home"
import Register from './components/Register';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/register" element={<Register/>}/>

      </Routes>
     
    </Router>
  )
}

export default App
