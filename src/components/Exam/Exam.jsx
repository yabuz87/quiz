import React from 'react'
import "./exam.css"
const Exam = () => {

  
  return (
    <div>
    <h1 className="text-center">Courses</h1>
    <hr></hr>
    <div className="home-container">
    
      <div className="option-container">
      <i className="bi bi-infinity"></i>
        <div>Math For Natural</div>
      </div>
      <div className="option-container">
      <i className="bi bi-calculator-fill"></i>
        <div>Math For Social Science</div>
      </div>
      <div className="option-container">
      <i className="bi bi-pc"></i>
        <div>Emerging Technology</div>
      </div>
      <div className="option-container">
      <i className="bi bi-globe-central-south-asia"></i>
        <div>Global Trend</div>
      </div>
      
      <div className="option-container">
      <i className="bi bi-megaphone"></i>
        <div>English skill I</div>
      </div>
      <div className="option-container">
      <i className="bi bi-megaphone-fill"></i>
        <div>English skill II</div>
      </div>
      <div className="option-container">
      <i className="bi bi-gear-wide-connected"></i>
        <div>physics</div>
      </div>  
    </div>
    </div>
  )
}

export default Exam
