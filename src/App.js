
import React from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
import Home from "./dashboard/home";
import Navbar from "./dashboard/navbar";
import Admin from "./admin/adminLogin";
import User from "./user/userLogin";
import Register from "./user/userRegister";
import Table from "./user/userList";
import NewTask from "./task/newtask";
import Task from "./task/task";
import UserDatails from "./user/user-datails";
import Usertask from "./task/userTask";
import Mytask from "./task/mytask";
import Add from "./user/addtask";
import CompleteTask from "./task/completeTask";




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
        <Route exact path="/task" element={<NewTask />} />
        <Route exact path="/newTask" element={<Task />} />
        <Route exact path="/user-details" element={<UserDatails />} />
       
        <Route exact path="/usertask" element={<Usertask />} />
        <Route exact path="/mytask" element={<Mytask />} />
        <Route exact path="/add/:id" element={<Add />} />
        <Route exact path="/complete-task" element={<CompleteTask />} />
        
       
      </Routes>
    </HashRouter>
  );
}

export default App;