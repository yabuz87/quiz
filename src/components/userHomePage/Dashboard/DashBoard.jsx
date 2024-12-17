import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/Firebase';
import { useNavigate } from 'react-router-dom';
import Exam from "../../Exam/Exam"
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
    return <p className=" 100vh">Loading...</p>;
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
            </div>
            <div className="body-section">
             <Exam/>
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
