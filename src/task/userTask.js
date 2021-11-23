
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';//foe edit purpose



const UserTask = () => {

    const [empList, process] = useState([]);
    const [message, msgprocess] = useState("");
    const [Data, Process] = useState([]);



    const getAll = () => {
        axios.get("http://localhost:4000/product/task/")

            .then(res => {
                process(res.data)

            });
            axios.get("http://localhost:4000/product/users/"+localStorage.getItem("userEmail"))

            .then(res => {
                Process(res.data)

            });

    }

    const save=(i)=>{
        let data = {
           
                 
        "storetask":i.taskName,
        "ID":Data._id,
        "sdescription":i.description,
        "sduration":i.duration
            
        }
        axios.post("http://localhost:4000/product/store/",data)
        .then(res=>{
          
        
        })
        axios.delete("http://localhost:4000/product/task/"+i._id)
        .then(res=>{
 
        })
        getAll();
     }
    
   useEffect(() => {
        getAll();
    }, true)

    return (
        <div className="container ">
            
           
            <div className="row text-center">
                 <h4 className="text-danger">Available Task : {empList.length}</h4>
                    
                        {
                            empList.map((e, index) => {
                                return (
                                    <div className="col-lg-4 p-3  border  alert-success" key={index}>
                                        <p>{message}</p>
                                        
                                      <h6 className="text-primary" >TaskName : <span className="text-success"> {e.taskName }</span></h6>
                                      <h6 className="text-primary">Description :-</h6>
                                      <p className="text-secondary" >{e.description}</p>
                                      <h6 className="text-primary">Duration : <span className="text-danger" >{e.duration }</span></h6>
                                       <button className="btn btn-success" onClick={save.bind(this,e)}>Add</button>
                                    </div>
                                )
                            })
                        }

                    
               
            </div>
        </div>
    )
                    }

export default UserTask