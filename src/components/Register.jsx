import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth,db} from "./firebase/Firebase";
import {setDoc,doc} from "firebase/firestore"

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      console.log(user);
      if(user)
      {
        await setDoc(doc(db,"user",user.id),{
          FirstName:firstName,
          LastName:lastName,
          email:email,
          password:password
        });
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="container-lg">
      <div className=" col col-lg-6 container-lg d-flex justify-content-center align-items-center " style={{paddingTop:"100px"}}>
        <div style={{width:"75%"}}>
          <div className="card p-2">
            <h1 className="text-center">Register</h1>
            <hr/>
            <div className="card-body">
              <form onSubmit={registerHandler}>
                <label className="card-title">First Name:</label>
                <input 
                  type="text" 
                  className="form-control w-100" 
                  onChange={(e) => setFirstName(e.target.value)} 
                  placeholder="First Name" 
                  required 
                />
                <label className="card-title">Last Name:</label>
                <input 
                  type="text" 
                  className="form-control w-100" 
                  onChange={(e) => setLastName(e.target.value)} 
                  placeholder="Last Name" 
                  required 
                />
                <label className="card-title">Email:</label>
                <input 
                  type="email" 
                  className="form-control w-100" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                  required 
                />
                <label className="card-title my-2">Password:</label>
                <input 
                  type="password" 
                  className="form-control w-100" 
                  onChange={(e) => setPassword(e.target.value)} 
                  placeholder="Enter your password" 
                  required 
                />
                <label className="card-title my-2">Confirm Password:</label>
                <input 
                  type="password" 
                  className="form-control mb-3 w-100" 
                  onChange={(e) => setConfirmPassword(e.target.value)} 
                  placeholder="Confirm your password" 
                  required 
                />
                <button type="submit" className="btn btn-primary my-2 px-5 w-100">Sign up</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
