import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Register() {

    const [name, pickName] = useState('');
    const [number, pickNumber] = useState('');
    const [mail, pickMail] = useState('');
    const [password, pickPassword] = useState('');
    const [msg, pickMsg] = useState('');
    const [Cmsg, CpickMsg] = useState('');


    const save=() =>{
         var registerStatus= false
        

        if(name!==''&&number!==""&&mail!==""&&password!==""){
            
            let data = {
                "fullName":name,
                "mobileNumber":number,
                "eMail":mail,
                "password":password
            }
                axios.post("http://localhost:4000/product/user",data)
                .then(res=>{
                    CpickMsg(data.fullName+"'s"+"details added successfully");
                    pickName("");
                    pickNumber("");
                    pickMail("");
                    pickPassword("")
                    
                })
        }else{
            pickMsg("Enter proper details...")
        }


        

    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    
                    <p className="text-danger text-center">{msg}</p>
                    <p className="text-success text-center">{Cmsg}</p>
                    <div className="card">
                        <div id="user" className="card-header p-3 text-white text-center alert-primary rounded">
                            <div className="row">
                                <div className="col-lg-6 text-start text-primary">User-Registration</div>
                                <div className="col-lg-6 text-end"><Link id="link" className='text-primary' to="/user">Already have an account?</Link><i className=" fa  fa-angles-right"></i></div>
                            </div>
                        </div>
                        <div className="card-body">
                            <label className="mt-2 mb-2 text-danger" >FullName</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Enter your Name"
                                onChange={obj => pickName(obj.target.value)}
                                value={name}></input>
                            <label className="mt-2 mb-2 text-danger" >Mobile-Number</label>
                            <input
                                type="number"
                                className="form-control"
                                placeholder="Enter your Number"
                                onChange={obj => pickNumber(obj.target.value)}
                                value={number}></input>
                            <label className="mt-2 mb-2 text-danger" >E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email id"
                                onChange={obj => pickMail(obj.target.value)
                                } required
                                value={mail}></input>
                            <label className="mt-2 mb-2 text-danger" >Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your Password"
                                onChange={obj => pickPassword(obj.target.value)}
                                value={password}></input>
                        </div>
                        <div className="card-footer  alert-primary text-center">
                            <button className="btn btn-success text-center" onClick={save}>register</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}
