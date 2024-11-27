import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

export default function ViewUser() {
    const[user,setUsers] = useState({
        name:"",
        username:"",
        email:""
    });

    const {id} = useParams();

    useEffect(()=>{
        loadUser()
    },[]);

    const loadUser=async ()=>{
        const result = await axios.get(`http://localhost:8081/user/${id}`)
        setUsers(result.data)
    };

  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
                <h2 className='text-center m-4'>View Details</h2>

                <div className='card'>
                    <div className='card-header'>
                        Details oF User id :
                        <ul className='list-group list-group-flush'>
                            <li className='list-group-item'>
                                <b>Name :</b>
                                {user.name}
                            </li>
                            <li className='list-group-item'>
                                <b>Username :</b>
                                {user.username}
                            </li>
                            <li className='list-group-item'>
                                <b>Email :</b>
                                {user.email}
                            </li>
                        </ul>
                        <Link className='btn btn-primary my-2' to={"/"}>Back To Home</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
