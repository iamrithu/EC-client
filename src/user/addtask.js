import React, { useState ,useEffect} from 'react';

import { useParams,Link } from 'react-router-dom';

import axios from 'axios';

export default function Add() {

 

    const{id}=useParams();
    const [name, pickName] = useState("");
    const [number, pickNumber] = useState(" ");
    const [mail, pickMail] = useState('');
    const [password, pickPassword] = useState('');
    const[task,pickTask]=useState("----");
    const[desc,pickDesc]=useState("----");
    const[time,pickTime]=useState("----");

    

    const getAll = () => {
       
        axios.get("http://localhost:4000/product/usersid/"+id)

            .then(res => {
               pickName(res.data.fullName);
               pickNumber(res.data.mobileNumber);
               pickMail(res.data.eMail);
               pickPassword(res.data.password)
               
            })
           

    }
    const save=()=>{
       let data = {
           "_id":id,
        "fullName":name ,
        "mobileNumber":number ,
        "eMail":mail ,
        "password": password,
        "task": [
            {
                "taskName":task ,
                "description": desc,
                "duration": time
               
            }
        ]
       }
       axios.put("http://localhost:4000/product/user/"+data._id,data)
       .then(res=>{
         
       
       })
    }
    

    useEffect(() => {
       
        getAll();

    }, true)
  

    
   

   


    return (
        <div className="container">
            
        <div className="row">
            <div className="col-lg-4"></div>
            <div className="col-lg-4">
                <p className="text-center text-success"></p>
            <div className="card mt-5">
                    <div id="admin" className="card-header  p-1 text-primary text-center alert-primary rounded">
                       New Task
                    </div>
                    <div className="card-body">
                    <label className="mt-2 mb-2 text-danger" >FullName</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Name"
                                value={name}
                                
                             >  
                                </input>
                          
                               
                    <label className="mt-2 mb-2 text-dark" >Task Name</label>
                        <input
                            type="email"
                            className="form-control"
                            placeholder="Enter your email id"
                            value={task}
                          onChange={obj=>pickTask(obj.target.value)}
                            >
                            
                           

                        </input>
                        <label className="mt-2 mb-2 text-dark" >Description</label>
                        <textarea className="form-control"
                        onChange={obj=>pickDesc(obj.target.value)} value={desc}
                         ></textarea>
                        <label className="mt-2 mb-2 text-dark" 
                        >Duration</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Enter your email id"
                            onChange={obj=>pickTime(obj.target.value)}
                            value={time}
                         >
                            
                           

                        </input>
                        
                        

                        
                    <div className="card-footer  text-center ">
                    <Link to="/user-list"><button className="btn btn-success text-center" onClick={save} >Post</button></Link>
                    </div>
                </div>
            </div>
            <div className="col-lg-4"></div>
        </div>
    </div>
    </div>
    )
}
