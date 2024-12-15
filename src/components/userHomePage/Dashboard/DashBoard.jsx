import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/Firebase';
import {photoObj} from "../../../assets/photObj";
import './index.css';

const DashBoard = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const userDoc = doc(db, 'users', user.uid);
        const docSnap = await getDoc(userDoc);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log('No such document!');
        }
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="container">
     
      {userData ? (
        <>
        <div className="profile">
          <div className="profile-sec">
          <i className="bi bi-person"></i>
          <p>{userData.FirstName}</p>
          <button className="btn profile-btn">View Profile</button>
          </div>
          <hr/>
          <div className="menu-option">
        
          <div><i className="bi bi-house"></i>Home</div>
          <div><i className="bi bi-stars"></i>your Score</div>
          <div><i className="bi bi-book"></i>Courses</div>
          <div><i className="bi bi-person-fill"></i>teachers</div>
          <div><i className="bi bi-chat"></i>comments</div>
          </div>
          </div>
          <div className="detail-section">
         <div className="header-nav">
          <div>
            <h1>Quiz.com</h1>
          </div>
          <div className="search-sec">
            <input type="text" placeholder="search exam"></input>
            <i className="bi bi-search "></i>
          </div>
          <div>
            <i className="bi bi-list icon" data-toggle="tooltip" data-placement="bottom" title="menu"></i>
            <i className="bi bi-person-fill icon" data-toggle="tooltip" data-placement="bottom" title="profile"></i>
            <i className="bi bi-gear icon" data-toggle="tooltip" data-placement="bottom" title="setting"></i>
          </div>
          <hr></hr>
        </div>
        <div className="body-section">
          <h3>quick Options</h3>
          <hr/>
          <div className="quick-option">
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
          </div>
          <h3>Courses</h3>
          <hr></hr>
        </div>
        </div>
        

        </>
      ) : (
        <p>Loading...</p>
      )}



      
    </div>);
};


export default DashBoard;
