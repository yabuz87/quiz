import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase/Firebase';
// import {  } from 'react-toastify';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Ensure Toastify CSS is imported
import './Spinner.css'; // Import the spinner CSS

const Login = () => {
  const navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submitHandle = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
      toast.success("User logged in successfully", {
        position: "top-center"
      });
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, {
        position: "bottom-center"
      });
    } finally {
      setLoading(false); // Set loading to false after registration completes
    }
  };

  return (
    <div className="container-fluid">
      <ToastContainer />
      {loading && (
        <div className="spinner-overlay">
          <div className="spinner"></div>
        </div>
      )}
      <div className="col col-lg-6 container-lg my-2 justify-content-center align-items-center" style={{ paddingTop: "20px" }}>
        <div className="col-sm-6" style={{ width: "75%" }}>
          <div className="card p-2">
            <h1 className="text-center">Log in</h1>
            <hr />
            <div className="card-body">
              <form onSubmit={submitHandle}>
                <label className="card-title">Email</label>
                <input
                  type="email"
                  className="form-control w-100"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                />
                <label className="card-title my-2">Password</label>
                <input
                  type="password"
                  className="form-control w-100"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
                <button type="submit" className="btn btn-primary my-2 px-5 w-100">Sign in</button>
              </form>
              <p className="text-center">or</p>
              <hr />
              <button className="btn btn-light w-100 py-2">
                <i className="bi bi-google p-2"></i>
                <span className="text-dark font-weight-bold">Sign in with Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
