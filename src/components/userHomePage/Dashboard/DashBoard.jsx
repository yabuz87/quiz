import React, { useEffect, useState } from 'react';
import { auth, db } from '../../firebase/Firebase';
import { doc, getDoc } from 'firebase/firestore';
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
      <h1 className="text-center">User Dashboard</h1>
      {userData ? (
        <div className="container-lg unscrollable-contnent">
  <div className="rounded-pill p-5" style={{width: "200px"}}>
    <i className="bi bi-person-fill" style={{fontSize: "130px", border: "solid 0.2px black", borderRadius: "150px"}}></i>
  </div>
  <h2>Welcome, {userData.FirstName}</h2>
  <h3>Scores</h3>
          <ul>
            {Object.keys(userData.scores).map((subject, index) => (
              <li key={index}>{subject}: {userData.scores[subject]}</li>
            ))}
            </ul>
</div>

      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};


export default DashBoard;
