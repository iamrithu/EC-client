import React, { useState ,useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function User() {

   
    const [mail, pickMail] = useState('');
    const [Password, pickPassword] = useState('');
    const [msg,pickMsg]=useState("");
    const [Cmsg,CpickMsg]=useState("");
    const[id,pickId]=useState("");


    const login = () => {
              var userStatus= false
            axios.get("http://localhost:4000/product/user")
            .then(res=>{
                res.data.map((info,index)=>{
                    if(mail===""||Password===""){
                      pickMsg("Enter the  proper values")
                    }else{
                         userStatus=true;
                    }

                    if(userStatus===true){
                        if((mail===info.eMail) && (Password===info.password) ){
                            localStorage.setItem('userEmail',mail);
                            localStorage.setItem('userPassword',Password);
                            pickMsg("Success:Please wait  for redirecting....")

                            window.location.reload();
                            window.location.href="http://localhost:3000/"
                            pickId(info._id);
                           
                           
                        }else{
                            
                            
                            pickMsg("User id is invalid")
                        }
                    }
                })
          
                     
            })
            
       
           
    }
   
       
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <p className="text-danger text-center">{msg}</p>
                    <p className="text-danger text-center">{Cmsg}</p>
                    <div className="card">
                        <div id="user" className="card-header p-3 text-white text-center alert-primary rounded">
                            <div className="row">
                                <div className="col-lg-6 text-start text-primary" >User-Login</div>
                                <div className="col-lg-6 text-end"><Link id="link" className='text-danger' to="/register">New-User</Link><i className=" fa  fa-angles-right"></i></div>
                            </div>
                        </div>
                        <div className="card-body m-4 p-4 alert-info ">
                            <label className="mt-2 mb-2 text-dark" >E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email id"
                                onChange={obj => pickMail(obj.target.value)}
                                value={mail}
                                required></input>
                            <label className="mt-2 mb-2 text-dark" >Password</label>
                            <input
                                type="password"
                                className="form-control"
                                placeholder="Enter your Password"
                                onChange={obj => pickPassword(obj.target.value)}
                                value={Password}
                            ></input>
                        </div>
                        <div className="card-footer  text-center alert-primary">
                            <button className="btn btn-success text-center" onClick={login}>Log-in</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}
