import React from 'react'
import { useNavigate } from 'react-router-dom';


const DashBoard = () => {
  return (
    <div className="container-fluid p-4" style={{marginLeft: "200px"}}>
      <div className="row">
        <div className="col-md-3">
          <div className="card text-white bg-primary mb-3">
            <div className="card-body">
              <h5 className="card-title">Users</h5>
              <p className="card-text">100</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-success mb-3">
            <div className="card-body">
              <h5 className="card-title">Active</h5>
              <p className="card-text">80</p>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card text-white bg-warning mb-3">
            <div className="card-body">
              <h5 className="card-title">Pending</h5>
              <p className="card-text">20</p>
            </div>
          </div>
        </div>
      </div>
      <h2>Recent Activity</h2>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">User</th>
            <th scope="col">Action</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>John Doe</td>
            <td>Login</td>
            <td>2024-12-13</td>
          </tr>
          {/* More rows */}
        </tbody>
      </table>
    </div>
  );
};


export default DashBoard;
