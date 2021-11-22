import React from 'react';
import { Link } from 'react-router-dom';



const Navbar = () => {
    const logOut=()=>{
        
        localStorage.clear();
       
        window.location.reload();
        window.location.href="http://localhost:3000/"
    }

    if(localStorage.getItem("email")!==null){
        var nav=<>
                 <Link id="link" to="/user-list"> <li>User-List</li></Link>
                 <Link id="link" to="/task"> <li>Available Task</li></Link>
                 <Link id="link" to="/complete-task"> <li>Completed-task</li></Link>
                 <Link id="link" className="link" to="/user"> <li onClick={logOut} > <span className="text-warning">Admin</span> Log-Out</li></Link>
                </>
    }else if(localStorage.getItem("userEmail")!==null){

        var x = localStorage.getItem("userEmail")
        var nav=<>
        <Link id="link" to="/user-details"> <li>User-Detail</li></Link>
        <Link id="link" to="/usertask"> <li>Tasks</li></Link>
        <Link id="link" to="/mytask"> <li>My-Tasks</li></Link>
        <Link id="link" to="/complete-tasks"> <li>Completed-Task</li></Link>
        <Link id="link"  className="link" to="/logout"> <li onClick={logOut}>Log-Out  </li> </Link><span  id="link"className=" mt-2 text-warning">{ x } </span> 
       </>

    }
    else{
         nav=<>
             <Link id="link" to="/admin">  <li>Admin</li></Link> 
            <Link id="link" to="/user"> <li>User</li></Link>
                   </>
    }
    return (
        <div>
            <ul>
                <Link  id="link" to=""> <li id="home">Home</li></Link>
               
                {
                    nav
                }
                </ul>
        </div>
    )
}

export default Navbar;
