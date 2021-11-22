import React, { useState ,useEffect} from 'react';

import { useParams,Link } from 'react-router-dom';

import axios from 'axios';

export default function Add() {

 

    const{id}=useParams();

    const getAll=()=>{
        axios.get("http://localhost:4000/product/user/"+id)
        .then(res=>{
           
        })
    }
    useEffect(()=>{
        getAll()
    },[true])
    return (
        <div className="container">
          <div className="row"></div>
        </div>
    )
}
