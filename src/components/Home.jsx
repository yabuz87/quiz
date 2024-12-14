import React,{useState,useEffect} from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {photoObj} from "../assets/photObj"
import {biology} from "../assets/biology";


const Home = () => {
   const [subject,setSubject]=useState(); 
  return (
    <div className="container-lg row align-items-center">
<div className="col-sm-7 scrollable-content " style={{marginTop:"70px",marginLeft:"10px"}}>
<h1 className="text-center">Quiz available</h1>
<div className="row justify-content-center align-items-center">
  {photoObj.map((item,index)=>{
    return(<>
        <div className="card m-2" style={{width: "18rem"}} key={index}>
  <img src={item.img} className="card-img-top" style={{ width:"100%",height:"230px"}}/>
  <div className="card-body">
    <h5 className="card-title">{item.name}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary px-5">Go</a>
  </div>
</div>
    </>);
  })}

  <div className="border rounded-2 p-3 m-2">
  <h1 className="text-center">Highlights</h1>
  <br/>
  {
  biology.map((item, index) => (
    <div className="" key={index}>
      <p className="h4"><span>{item.id}&nbsp;&nbsp;</span>{item.question}</p>
      {item.options.map((op, opIndex) => (
        <p key={opIndex} className="p-1 hover-effect" style={{cursor:"pointer"}}>{op}</p>
      ))}
    </div>
  ))
}

  </div>
</div>
      <div className="col-md-5 row container-lg  justify-content-center align-items-center unscrollable-contnent d-sm-none d-lg-block " style={{paddingTop:"100px"}}>
  <div className="col-sm-6" style={{width:"75%"}}>
    <div className="card p-2">
    <h1 className="text-center">Log in</h1>
    <hr/>
      <div className="card-body">

        <label className="card-title">email</label>
        <input type="email" className="form-control w-100" placeholder="Enter your email"/>
        <label className="card-title my-2 ">Password</label>
        <input type="email" className="form-control mb-3 w-100" placeholder="Enter your password"/>
        <a href="#" className="btn btn-primary my-2 px-5 w-100" >login</a>
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
    </div>
  )
}

export default Home
