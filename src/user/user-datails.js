import React,{useState,useEffect} from 'react';
import axios from 'axios';
export default function UserDatails() {

    const [data, process] = useState([]);
    const [message, msgprocess] = useState("");
  

    const getAll = () => {
        axios.get("http://localhost:4000/product/users/"+localStorage.getItem("userEmail"))

            .then(res => {
                process(res.data)

            })

    }

    useEffect(() => {
        getAll();
    }, true)
  


    return (
       <div className="container">
           <div className="row">
               <h5>User Name : <lable className="text-primary"> {data.fullName}</lable></h5>
               <h5>Mobile Number : <lable className="text-primary"> {data.mobileNumber}</lable></h5>
               <h5>Email: <lable className="text-primary"> {data.eMail}</lable></h5>
             <p>{data._id}</p>
                
           </div>
       </div>
    )

}
