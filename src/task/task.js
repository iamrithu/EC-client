import React,{useState} from 'react';
import axios from 'axios';

export default function Task() {

    const[task,pickTask]=useState("");
    const[desc,pickDesc]=useState("");
    const[time,pickTime]=useState("");
    const[msg,pickMsg]=useState("");

    const save = () =>{
        let data = {
            "taskName":task,
            "description":desc,
            "duration":time
           
        }
       
            axios.post("http://localhost:4000/product/task",data)
            .then(res=>{
                pickTime("");
                pickDesc("");
                pickTask("");
                pickMsg("Task Added")
                
            })
    }


    return (
        <div className="container">
            
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <p className="text-center text-success">{msg}</p>
                <div className="card mt-5">
                        <div id="admin" className="card-header  p-1 text-primary text-center alert-primary rounded">
                           New Task
                        </div>
                        <div className="card-body">
                            <label className="mt-2 mb-2 text-dark" >Task Name</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email id"
                                onChange={obj=>pickTask(obj.target.value)}>
                                
                               

                            </input>
                            <label className="mt-2 mb-2 text-dark" >Description</label>
                            <textarea className="form-control"
                             onChange={obj=>pickDesc(obj.target.value)}></textarea>
                            <label className="mt-2 mb-2 text-dark" >Duration</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your email id"
                                onChange={obj=>pickTime(obj.target.value)}>
                                
                               

                            </input>
                            
                            

                            
                        <div className="card-footer  text-center ">
                            <button className="btn btn-success text-center" onClick={save} >Post</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
        </div>
    )
}
