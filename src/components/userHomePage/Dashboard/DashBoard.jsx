import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { photoObj } from '../../../assets/photObj';
import { auth, db } from '../../firebase/Firebase';
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


    <div className=" col-6 row justify-content-center align-items-center">
      {photoObj.map((item,index)=>{
       return( <>
            <div className="card m-2" style={{width: "18rem"}} key={index}>
      <img src={item.img} className="card-img-top" style={{ width:"100%",height:"230px"}}/>
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary px-5">Go</a>
      </div>
    </div>
        </>)
      })}
      </div>
     
      {userData ? (
        <div className="col-3 unscrollable-contnent shadow-3 me-3" style={{paddingTop:"100px"}}>
        <h1 className="text-center">User Dashboard</h1>
  <div className="rounded-pill text-center" style={{width: "100%"}}>
    <i className="bi bi-person-fill rounded-pill" style={{fontSize: "120px", border: "solid 0.2px black"}}></i>
  </div>
  <h2 className="text-center">Welcome, {userData.FirstName}</h2>
  <h3 className="text-center">Recent</h3>
  <table className="border p-3 text-center">
  <thead className="gap-2">
    <tr>
      <th className="px-3">Subjects</th>
      <th className="px-3">Score (100)</th>
    </tr>
  </thead>
  <tbody >
    {Object.keys(userData.scores).map((subject, index) => (
      <tr key={index}>
        <td className="px-3">{subject}</td>
        <td className="px-3">{userData.scores[subject]}</td>
      </tr>
    ))}
  </tbody>
</table>

</div>

      ) : (
        <p>Loading...</p>
      )}



      
    </div>);
};


export default DashBoard;
