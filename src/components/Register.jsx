import React from 'react'

const Register = () => {

  return (
    <div className="container-fluid">
      <div className="col-sm-6 container-lg  justify-content-center align-items-center" style={{paddingTop:"100px"}}>
  <div className="col-sm-6" style={{width:"75%"}}>
    <div className="card p-2">
    <h1 className="text-center">Register</h1>
    <hr/>
      <div className="card-body">

        <label className="card-title">First Name:</label>
        <input type="email" className="form-control w-100" placeholder="First Name"/>
        <label className="card-title">Last Name</label>
        <input type="email" className="form-control w-100" placeholder="Last Name"/>
        <label className="card-title">email</label>
        <input type="email" className="form-control w-100" placeholder="Enter your email"/>
        <label className="card-title my-2 ">Password</label>
        <input type="email" className="form-control mb-3 w-100" placeholder="Enter your password"/>
        <a href="#" className="btn btn-primary my-2 px-5 w-100" >Sign up</a>

      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Register
