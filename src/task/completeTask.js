
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';//foe edit purpose



const CompleteTask = () => {

    const [empList, process] = useState([]);
    const [message, msgprocess] = useState("")

    const getAll = () => {
        axios.get("http://localhost:4000/product/Ctask")

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
                
                    
                        {
                            empList.map((e, index) => {
                                return (
                                    <div className="col-lg-4 p-3  border  alert-warning" key={index}>
                                        
                                      <h6 className="text-primary">TaskName : <span className="text-success"> {e.CtaskName }</span></h6>
                                      <h6 className="text-primary">Description :-</h6>
                                      <p className="text-secondary">{e.Cdescription}</p>
                                      <h6 className="text-primary">Duration : <span className="text-danger">{e.Cduration }</span></h6>
                                       
                                    </div>
                                )
                            })
                        }

                    
               
            </div>
        </div>
    )
}

export default CompleteTask