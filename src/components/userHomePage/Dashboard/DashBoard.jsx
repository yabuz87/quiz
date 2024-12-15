import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import { photoObj } from "../../../assets/photObj";
import './index.css';

const DashBoard = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

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
      } else {
        console.log('User not authenticated!');
        navigate('/login'); // Redirect to login page if user is not authenticated
      }
      setLoading(false); // Set loading to false after fetching data
    };

    fetchUserData();
  }, [navigate]);

  const handleLogout = () => {
    const confirmLogout = window.confirm("Are you sure you want to log out?");
    if (confirmLogout) {
      auth.signOut().then(() => {
        navigate('/login'); // Redirect to login page after logout
      }).catch((error) => {
        console.error("Error signing out: ", error);
      });
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="container">
      {userData ? (
        <>
          <div className="profile">
            <div className="profile-sec">
              <i className="bi bi-person"></i>
              <p>{userData.FirstName}</p>
              <button className="btn profile-btn">View Profile</button>
              <button className="btn logout-btn my-3" onClick={handleLogout}>Log out</button>
            </div>
            <hr/>
            <div className="menu-option">
              <div><i className="bi bi-house"></i>Home</div>
              <div><i className="bi bi-stars"></i>Your Score</div>
              <div><i className="bi bi-book"></i>Courses</div>
              <div><i className="bi bi-person-fill"></i>Teachers</div>
              <div><i className="bi bi-chat"></i>Comments</div>
            </div>
          </div>
          <div className="detail-section">
            <div className="header-nav">
              <div className="logo-name" onClick={() => { navigate("/") }}>
                <span className="logoname">Qu<span className="logoname-end">iz.com</span></span>
              </div>
              <div className="search-sec">
                <input type="text" placeholder="Search exam" />
                <i className="bi bi-search" data-toggle="tooltip" data-placement="bottom" title="Search exams"></i>
              </div>
              <div>
                <i className="bi bi-list icon" data-toggle="tooltip" data-placement="bottom" title="Menu"></i>
                <i className="bi bi-person-fill icon" data-toggle="tooltip" data-placement="bottom" title="Profile"></i>
                <i className="bi bi-gear icon" data-toggle="tooltip" data-placement="bottom" title="Setting"></i>
              </div>
              <hr/>
            </div>
            <div className="body-section">
              <h3 className="text-center">Quick Options</h3>
              <hr/>
              <div className="quick-option">
                {photoObj.map((item, index) => {
                  return (
                    <div className="card" style={{ width: "18rem" }} key={index}>
                      <img src={item.img} className="card-img-top" style={{ width: "100%", height: "230px" }} />
                      <div className="card-body">
                        <h5 className="card-title">{item.name}</h5>
                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <a href="#" className="btn card-btn px-5">Go</a>
                      </div>
                    </div>
                  );
                })}
              </div>
              <h3 className="course text-center h2 mt-3">Courses</h3>
              <hr/>
            </div>
          </div>
        </>
      ) : (
        <p>No user data found.</p>
      )}
    </div>
  );
};

export default DashBoard;
