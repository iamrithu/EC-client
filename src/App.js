
import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./dashboard/home";
import Navbar from "./dashboard/navbar";
import Admin from "./admin/adminLogin";
import User from "./user/userLogin";
import Register from "./user/userRegister";
import Table from "./user/userList";





const App = () => {
  return (
    <HashRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route exact path="" element={<Home />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route exact path="/user" element={<User />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/user-list" element={<Table />} />
        
       
      </Routes>
    </HashRouter>
  );
}

export default App;