
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
    const del =(e)=>{
        axios.delete("http://localhost:4000/product/Ctask/"+e._id)

        .then(res => {
           

        })
        getAll();
    }

    
    useEffect(() => {
        getAll();
    }, true)

    return (
        <div className="container ">
            
           <div className="row text-center">
               <h4 className="text-primary">{empList.length}</h4>
           </div>
            <div className="row">
                
                    
                        {
                            empList.map((e, index) => {
                                return (
                                    <div className="col-lg-4 p-3  border  alert-warning" key={index}>
                                        
                                      <h6 className="text-primary">TaskName : <span className="text-success"> {e.CtaskName }</span></h6>
                                      <h6 className="text-primary">Description :-</h6>
                                      <p className="text-secondary">{e.Cdescription}</p>
                                      <h6 className="text-primary">Duration : <span className="text-danger">{e.Cduration }</span></h6>
                                       <button className="btn btn-danger m-4" onClick={del.bind(this,e)}>Delete</button>
                                    </div>
                                )
                            })
                        }

                    
               
            </div>
        </div>
    )
}

export default CompleteTask