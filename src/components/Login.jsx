import React from 'react'

const Login = () => {
  return (
    <div className="container-fluid">
    <div className="col-sm-6 container-lg  justify-content-center align-items-center" style={{paddingTop:"100px"}}>
<div className="col-sm-6" style={{width:"75%"}}>
  <div className="card p-2">
  <h1 className="text-center">Log in</h1>
  <hr/>
    <div className="card-body">

      <label className="card-title">email</label>
      <input type="email" className="form-control w-100" placeholder="Enter your email"/>
      <label className="card-title my-2 ">Password</label>
      <input type="email" className="form-control w-100" placeholder="pass word"/>
      <a href="#" className="btn btn-primary my-2 px-5 w-100" >Sign in</a>
      <p className="text-center">or</p>
      <hr/>
      <button className="btn btn-light w-100 py-2"><i className="bi bi-google p-2"></i>
      <p className="text-dark text-bold">Sign in with Google</p>
      </button>

    </div>
  </div>
</div>
</div>
  </div>
  )
}

export default Login

