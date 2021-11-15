
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';//foe edit purpose



const Table = () => {

    const [empList, process] = useState([]);
    const [message, msgprocess] = useState("")

    const getAll = () => {
        axios.get("http://localhost:4000/product/user")

            .then(res => {
                process(res.data)

            })

    }

    
    useEffect(() => {
        getAll();
    }, true)

    return (
        <div className="container ">
            <div className="row">
                <div className="col-lg-12">
                    <h3 className="text-center">User-List</h3>
                </div>
                
                    <p className="text-danger"> {message}</p>
               
            </div>
            <div className="row">
                <table className="table  table-hover table-bordered text-center table-responsive ">
                    <thead>
                        <tr>
                            <th>User-ID</th>
                            <th>User-Name</th>
                            <th>Mobile.no  </th>
                            <th>Email</th>

                            <th>Add</th>
                           
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            empList.map((e, index) => {
                                return (
                                    <tr key={index}>
                                        
                                        <td>
                                            {e._id} 
                                        </td>
                                        <td>
                                            {e.fullName} 
                                        </td>
                                        <td>
                                            {e.mobileNumber} 
                                        </td>
                                        <td>
                                            {e.eMail} 
                                        </td>
                                        <td><button className="btn btn-success" >Add</button></td>
                                        <td><button className="btn btn-danger" >Remove</button></td>
                                    </tr>
                                )
                            })
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Table