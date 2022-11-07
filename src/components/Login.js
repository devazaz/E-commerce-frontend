import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Axios } from "axios";

const Login=()=>{
     
 const [Password,setPassword] = useState("");
 const [Name,setName] = useState("");

  return( <div>
        <form >
            <input onChange={(e)=>{
              setName(e.target.value)
            }} type="text" placeholder="UserName "/>ِ<br/>

            <input onChange={(e)=>{
              setPassword(e.target.value)
            }}type="password" placeholder="Password"/><br/>  
              <button >Submit</button><br/>     
            <Link to="/register">Register</Link>
            <Link to="/products">Products</Link>    
        </form>
    </div>)

  }
export default Login;