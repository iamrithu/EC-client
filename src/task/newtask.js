
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';//foe edit purpose



const NewTask = () => {

    const [empList, process] = useState([]);
    const [message, msgprocess] = useState("")

    const getAll = () => {
        axios.get("http://localhost:4000/product/task")

            .then(res => {
                process(res.data)

            })

    }
    const del=(i)=>{
        axios.delete("http://localhost:4000/product/task/"+i)
        .then(res=>{
 
        })
        getAll();
     }

    
    useEffect(() => {
        getAll();
    }, true)

    return (
        <div className="container ">
            <div className="row">
                <div className="col-lg-6">Available Task : {empList.length}</div>
                <div className="col-lg-6 text-end">
                <Link to="/newTask"> <button className="btn btn-primary m-3 ">Add Task</button></Link>
                </div>
            </div>
           
            <div className="row">
                
                    
                        {
                            empList.map((e, index) => {
                                return (
                                    <div className="col-lg-4 p-3  border alert-warning " key={index}>
                                        
                                      <h6 className="text-primary">TaskName : <span className="text-success"> {e.taskName }</span></h6>
                                      <h6 className="text-primary">Description :-</h6>
                                      <p className="text-secondary">{e.description}</p>
                                      <h6 className="text-primary">Duration : <span className="text-danger">{e.duration }</span></h6>
                                      <button className="btn btn-danger text-center m-2"  onClick={del.bind(this,e._id)}>Remove</button>
                                    </div>
                                )
                            })
                        }

                    
               
            </div>
        </div>
    )
}

export default NewTask