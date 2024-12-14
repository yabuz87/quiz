import React from 'react';
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
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed", top:"0", zIndex:"100", width:"100%"}}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <a className="navbar-brand" href="#">Quiz.com</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              {/* <li className="nav-item">
                <a className="nav-link active" aria-current="page" style={{cursor:"pointer"}} >Home</a>
              </li> */}
              <li>
                <a className="btn btn-light text-dark my-2 mx-2 border px-5 bg-light" style={{fontSize:"21px"}} onClick={homePage}>Home</a>
              </li>
              <li>
                <a className="btn btn-info text-light my-2 mx-2  px-5" onClick={loginPage}>Login</a>
              </li>
              <li>
                <a className="btn btn-warning text-light  my-2 mx-2 px-5" onClick={registerPage}>Register</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
