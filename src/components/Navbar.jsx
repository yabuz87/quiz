import React from 'react'

const Navbar = () => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{position:"fixed",zIndex:"100",width:"100%"}} >
  <div className="container-fluid">
    <a className="navbar-brand" href="#">Quiz.com</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Login</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Register</a>
        </li>
        <li> <a href="#" className="btn btn-info text-light my-2 mx-2 px-5">Register</a></li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
