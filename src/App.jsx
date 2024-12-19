import React from 'react';
import Navbar from './components/Navbar'; // Make sure this path is correct
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import Register from './components/Register';
import Login from './components/Login/Login';
import DashBoard from './components/userHomePage/Dashboard/DashBoard';
import { MyContext, MyProvider } from './Context';
import Chapter from './components/Exam/Chapter';


const App = () => {
  return (
    <MyProvider>
      <Router>
        <Navbar /> {/* Add the Navbar component here if you want it on every page */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/chapter" element={<Chapter/>}/>
        </Routes>
      </Router>
      </MyProvider>
  );
};

export default App;
