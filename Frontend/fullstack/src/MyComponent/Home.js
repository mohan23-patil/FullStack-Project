import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'

export default function Home() {
  const [users, setUsers] = useState([]);
  const {id} = useParams();

  useEffect(() => {
    loadUsers();
  }, []);

  const loadUsers = async () => {
    try {
      const result = await axios.get("http://localhost:8081/users");
      setUsers(result.data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  const deleteUser = async(id)=>{
    await axios.delete(`http://localhost:8081/user/${id}`)
    loadUsers()
  };

  return (
    <>
      <div className="container mt-5 border shadow">
        <h2 className="text-center mb-4">Add User</h2>
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Username</th>
                <th scope="col">Email</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>
                    <Link
                      type="button"
                      className="btn btn-primary btn-sm mb-2 mx-1"
                      to={`/viewuser/${user.id}`}
                    >
                      View
                    </Link>
                    <Link
                      type="button"
                      className="btn btn-outline-success btn-sm mb-2 mx-1"
                      to={`/edituser/${user.id}`}
                    >
                      Edit
                    </Link>
                    <button
                      type="button"
                      className="btn btn-danger btn-sm mb-2 mx-1"
                      onClick={()=>deleteUser(user.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
