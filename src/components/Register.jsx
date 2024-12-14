import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from './firebase/Firebase';
import { setDoc, doc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';  // Ensure Bootstrap CSS is imported

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false); // State for loading

  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error("Passwords do not match!", { position: "top-center" });
      return;
    }

    setLoading(true); // Set loading to true

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      if (user) {
        await setDoc(doc(db, "users", user.uid), {
          FirstName: firstName,
          LastName: lastName,
          email: email,
          password: password,
        });
        toast.success("User Registered Successfully!!", {
          position: "top-center",
        });
        navigate("/dashboard");
      }
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, {
        position: "top-center",
      });
    } finally {
      setLoading(false); // Set loading to false after registration completes
    }
  };

  return (
    <div className="container-lg">
      <ToastContainer />
      {loading && (
        <div className="d-flex justify-content-center align-items-center" style={{
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100vw', 
          height: '100vh', 
          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
          zIndex: 9999
        }}>
          <div className="spinner-border text-light" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div className="col col-lg-6 container-lg d-flex justify-content-center align-items-center" style={{ paddingTop: "100px" }}>
        <div style={{ width: "75%" }}>
          <div className="card p-2">
            <h1 className="text-center">Register</h1>
            <hr />
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
