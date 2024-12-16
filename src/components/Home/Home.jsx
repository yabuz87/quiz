import React, { useState, useEffect } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { photoObj } from '../../assets/photObj';
import { biology } from '../../assets/biology';
import Login from '../Login/Login';
import Navbar from '../Navbar';
import hero from '../../assets/hero.jpg';
import './index.css';
import exams from '../../assets/Exams';
import Carousel from '../carousel/Carousel';

const Home = () => {
  const [subject, setSubject] = useState(); 

  const getEmbedUrl = (url) => {
    const urlObj = new URL(url);
    let videoId = urlObj.searchParams.get('v');

    if (!videoId) {
      const paths = urlObj.pathname.split('/');
      videoId = paths[paths.length - 1];
    }

    return `https://www.youtube.com/embed/${videoId}`;
  };

  return (
    <div>
      <Navbar />
      <div className="home-page-container container-lg">
        <div className="upper-div container-lg">
          <div className="">
            <h1 className="text-center">Come Along Us, We Begin Our Learning Journey</h1>
            <p className="text-center">
              Welcome to your go-to hub for academic excellence! Our platform is packed with expertly curated 
              courses, exam materials, and cheat sheets designed by top students. Quickly access valuable resources, engaging YouTube videos, and helpful website links—all in one place. Plus, our advanced AI, powered by Gemini 3.15, is here to provide personalized support. Dive in and start mastering your subjects today!
            </p>
            <hr />
          </div>
          <div className="image-container">
            <img className="hero-img" src={hero} alt="Hero" />
          </div>
        </div>
        
        <h3 className="text-center">Exams are Available</h3>
        <hr />
        <div className="middle-div">  
          {exams.map((item, index) => {
            const embedUrl = getEmbedUrl(item.url); 
            return (
              <div className="card mt-3" key={index}>
                <div className="card-body">
                  <h5 className="card-title text-center">{item.name}</h5>
                  <iframe
                    width="100%"
                    height="230"
                    src={embedUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                  <p className="card-text mt-2">Here is a video to motivate your study and help you align with your field.</p>
                </div>
              </div>
            );
          })}
        </div>
        
        <h3 className="text-center">Courses</h3>
        <Carousel />
        <hr />
      </div>
    </div>
  );
}

export default Home;
