
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';//foe edit purpose



const UserTask = () => {

    const [empList, process] = useState([]);
    const [message, msgprocess] = useState("");
    const [Data, Process] = useState([]);

    const[task,pickTask]=useState("");
    const[desc,pickDesc]=useState("");

    const[dura,pickDure]=useState("");


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

    const add = (i)=>{
        var data={
            "_id": Data._id,
            "fullName": Data.fullName,
            "mobileNumber": Data.mobileNumber,
            "eMail":Data.eMail,
            "password":Data.password,
            "task": [{
                "taskName":i.taskName,
                "description":i.description,
                "duration":i.duration
            }],
        }
        axios.put("http://localhost:4000/product/user/"+data)
        .then(res=>{
           
        })    
         }
    


    
       

        
       
   
    



    
    useEffect(() => {
        getAll();
    }, true)

    return (
        <div className="container ">
            
           
            <div className="row">
                
                    
                        {
                            empList.map((e, index) => {
                                return (
                                    <div className="col-lg-4 p-3  border " key={index}>
                                        
                                      <h6 className="text-primary" >TaskName : <span className="text-success" onChange={obj=>pickTask(obj.target.value)}> {e.taskName }</span></h6>
                                      <h6 className="text-primary">Description :-</h6>
                                      <p className="text-secondary" onChange={obj=>pickDesc(obj.target.value)}>{e.description}</p>
                                      <h6 className="text-primary">Duration : <span className="text-danger" onChange={obj=>pickDure(obj.target.value)}>{e.duration }</span></h6>
                                       <button className="btn btn-success" onClick={add.bind(this,e)}>Add</button>
                                    </div>
                                )
                            })
                        }

                    
               
            </div>
        </div>
    )
                    }

export default UserTask