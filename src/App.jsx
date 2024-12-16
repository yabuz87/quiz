import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from "./components/Home/Home"
import Register from './components/Register';
import Login from './components/Login/Login';
import DashBoard from './components/userHomePage/Dashboard/DashBoard';

const App = () => {
  return (
    <Router>
      
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/dashboard" element={<DashBoard/>}/>

      </Routes>
     
    </Router>
  )
}

export default App
