
import React, { useState, useEffect } from 'react'

export default function Admin() {

    const [mail, getMail] = useState('');
    const [password, getPassword] = useState('');
    const [msg, getMsg] = useState('');
    const [Cmsg, CgetMsg] = useState('');


    const adminLogin = () => {
        var loginStatus=false

        if(mail===""||password===""){
            getMsg("Invalid Details")
        }else{ 
            loginStatus=true
           
        }
        
        if(loginStatus===true){

            if(mail==="ritimahesh29@gmail.com" && password==="iamrithi333"){
                loginStatus=true;
                localStorage.setItem('email',mail);
                localStorage.setItem('password',password);
                CgetMsg("Success:Please wait  for redirecting....")

                window.location.reload();
                window.location.href="http://localhost:3000/"
        }else{
            getMsg("Email and Password does not match")
        }
    }


        getMail("");
        getPassword("");

       
        
    }

    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-4"></div>
                <div className="col-lg-4">
                    <p className ="text-center text-danger">{msg}</p>
                    <p className ="text-center text-success">{Cmsg}</p>
                    <div className="card">
                        <div id="admin" className="card-header p-1 text-primary text-center alert-primary rounded">
                            Admin
                        </div>
                        <div className="card-body">
                            <label className="mt-2 mb-2 text-danger" >E-mail</label>
                            <input
                                type="email"
                                className="form-control"
                                placeholder="Enter your email id"
                                onChange={obj=>getMail(obj.target.value)}
                                value={mail}
                                autoComplete="off">

                            </input>
                            <label className="mt-2 mb-2 text-danger" >Password</label>
                            <input type="password" 
                            className="form-control" 
                            placeholder="Enter your Password"
                            onChange={obj=>getPassword(obj.target.value)}
                            value={password}>

                            </input>
                        </div>
                        <div className="card-footer  text-center alert-primary">
                            <button className="btn btn-success text-center" onClick={adminLogin}>Log-in</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </div>
    )
}
