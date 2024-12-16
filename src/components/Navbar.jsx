import React from 'react';
import "../components/Navbar/index.css"
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const registerPage = () => {
    navigate("/register");
  };
  const loginPage=()=>
  {
    navigate("/login");

  }
  const homePage=()=>{
    navigate("/");
  }

  return (
    <div className="container-fluid p-0">
      <nav className="navbar navbar-expand-lg navbar-light bg-light " style={{position:"fixed", top:"0", zIndex:"100", width:"100%"}}>
        <div className="container-fluid nav-section">
          <a className="navbar-brand" href="#">Quiz.com</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav option-ul">
              <li>
                <a className="btn btn-light text-dark my-2 mx-2 border px-5 bg-light" style={{fontSize:"21px"}} onClick={homePage}>Home</a>
              </li>
              <li className="search-li">
                <input type="text" placeholder="search" ></input>
                <i className="bi bi-search me-1" style={{cursor:"pointer"}} data-toggle="tooltip" data-placement="bottom" title="Search exams"></i>
              </li>
              <li>
                <a className="btn login-button  border-primary my-2 mx-2  px-5" onClick={loginPage}>Login</a>
              </li>
              <li>
                <a className="btn register-button border-primary  my-2 mx-2 px-5" onClick={registerPage}>Register</a>
              </li>
            </ul>
            <a className="text-decoration-none text-dark px-5" style={{cursor:"pointer"}}>About Us</a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
