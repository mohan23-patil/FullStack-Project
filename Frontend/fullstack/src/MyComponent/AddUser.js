import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {
  const navigate = useNavigate();

  const [User, setUsers] = useState({
    name: '',
    username: '',
    email: '',
  });

  const { name, username, email } = User;

  const onInputChange = (e) => {
    setUsers({ ...User, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8081/user', User);
      navigate('/');
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
        <div className="card p-3 border shadow" style={{ maxWidth: '90%', width: '24rem' }}>
          <h5 className="text-center mb-4 fw-bold">Add User</h5>
          <form onSubmit={onSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="name"
                name="name"
                placeholder="Enter your Name"
                value={name}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control form-control-sm"
                id="username"
                name="username"
                placeholder="Enter your User Name"
                value={username}
                onChange={onInputChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                className="form-control form-control-sm"
                id="email"
                name="email"
                placeholder="Enter your Email"
                value={email}
                onChange={onInputChange}
              />
            </div>
            <div>
              <button type="submit" className="btn btn-outline-success btn-sm">
                Submit
              </button>
              <Link to="/" className="btn btn-outline-danger btn-sm mx-2">
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
