
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';//foe edit purpose


const Mytask = () => {

    const [empList, process] = useState([]);
    const [message, msgprocess] = useState("");
    const [Data, Process] = useState([]);


    const value = ()=>{    axios.get("http://localhost:4000/product/store/"+Data._id)

    .then(res => {
        process(res.data);


    });
    
    }
    value();
   

    const getAll = () => {
        
            axios.get("http://localhost:4000/product/users/"+localStorage.getItem("userEmail"))

            .then(res => {
                Process(res.data)

            });
           

            value();

    }
    const send = (i)=>{

        var data={
            "CtaskName":i.storetask,
            "Cdescription": i.sdescription,
            "Cduration": i.sduration 
            
        }
        
        axios.post("http://localhost:4000/product/Ctask",data)

            .then(res => {
                

            });
            axios.delete("http://localhost:4000/product/store/"+i._id)

            .then(res => {
                
            });
    }
const del = (i)=>{
    axios.delete("http://localhost:4000/product/store/"+i)
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
                                        
                                      <h6 className="text-primary" >TaskName : <span className="text-success"> {e.storetask }</span></h6>
                                      <h6 className="text-primary">Description :-</h6>
                                      <p className="text-secondary" >{e.sdescription}</p>
                                      <h6 className="text-primary">Duration : <span className="text-danger" >{e.sduration }</span></h6>
                                      <div className="row mt-5">
                                          <div className="col-lg-6 text-end">
                                              <button className="btn alert-danger"  onClick={del.bind(this,e._id)}>Remove</button>
                                          </div>
                                          <div className="col-lg-6">
                                          <button className="btn alert-warning text-dark text-start" onClick={send.bind(this,e)}>Completed</button>
                                          </div>
                                    </div>
                                    </div>
                                )
                            })
                        }

                    
               
            </div>
        </div>
    )
                    }

export default Mytask