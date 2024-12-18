import React, { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../firebase/Firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Spinner.css';

const Login = () => {
  const navigate = useNavigate();
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

  const googleSignIn = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, provider);
      navigate("/dashboard");
      toast.success("User logged in with Google successfully", {
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
    <div className="container-lg">
        <ToastContainer/>
          {loading && (
            <div className="d-flex justify-content-center align-items-center" style={{
             
            }}>
              <div className="spinner-overlay">
      <div className="spinner"></div>
    </div>
    
            </div>
          )}
          <div className="col col-lg-6 container-lg d-flex justify-content-center align-items-center" style={{ marginTop: "120px" }}>
            <div style={{ width: "75%" }}>
              <div className="card p-2">
                <h1 className="text-center">Login</h1>
                <hr />
                <div className="card-body">
                  <form onSubmit={submitHandle}>
                    <label className="card-title">email:</label>
                    <input
                      type="text"
                      className="form-control w-100"
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="email"
                      required
                    />
                    <label className="card-title">Password:</label>
                    <input
                      type="password"
                      className="form-control w-100"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Password"
                      required
                    />
                    <button type="submit" className="btn btn-primary my-2 px-5 w-100">login</button>
                  </form>
                  <p className="text-center">or</p>
               <hr />
              <button className="btn btn-light w-100 py-2" onClick={googleSignIn}>
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