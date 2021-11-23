import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function UserDatails() {

    const [data, process] = useState([]);
    const [message, msgprocess] = useState("");
  
    var x = localStorage.getItem("userEmail")
    const getAll = () => {
        axios.get("http://localhost:4000/product/users/"+x)

            .then(res => {
                process(res.data)

            })
           

    }

    useEffect(() => {
       
        getAll();

    }, true)
  


    return (
       <div className="container alert-dark">
           <div className="row">
               <div className="col-lg-3"></div>
               <div className="col-lg-6 border m-4 p-4 alert-info">
               <h5>User Name : <lable className="text-primary"> {data.fullName}</lable></h5>
               <h5>Mobile Number : <lable className="text-primary"> {data.mobileNumber}</lable></h5>
               <h5>Email: <lable className="text-primary"> {data.eMail}</lable></h5>
               </div>
            <div className="col-lg-3"></div>
           </div>
       </div>
    )

}
