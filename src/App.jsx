import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from "./components/Home"
import Register from './components/Register';
import Login from './components/login';
import DashBoard from './components/userHomePage/Dashboard/DashBoard';

const App = () => {
  return (
    <Router>
      <Navbar/>
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
