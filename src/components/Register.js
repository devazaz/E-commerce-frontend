
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";



const Register=()=>{

   const [Name,setName] = useState("");
   const [Phonenumber,setPhonenumber] = useState("");
   const [Email, setEmail] = useState("");
   const [Password,setPassword] = useState("");

    const submitData=async()=>{
        await axios.post('https://fakestoreapi.com/users',
            {
                email:Email,
                username:Name,
                password:Password,
                name:{
                    firstname:Name,
                    lastname:Name
                },
                address:{
                    city:'kilcoole',
                    street:'7835 new road',
                    number:3,
                    zipcode:'12926-3874',
                    geolocation:{
                        lat:'-37.3159',
                        long:'81.1496'
                    }
                },
                phone:Phonenumber
            }
        ).then((respone)=>{
            console.log(respone);
        })       
    }

    return(
    <div>
        <form>
            <input onChange={(e)=>{
              setName(e.target.value)
            }} type="text" placeholder="Enter Your Name" /><br/>
            <input onChange={(e)=>{
              setPhonenumber(e.target.value)
            }} type="text" placeholder="Enter phonenumber" /><br/>
            <input onChange={(e)=>{
              setEmail(e.target.value)
            }} type="email" placeholder="Enter your email"/><br/>
            <input onChange={(e)=>{
              setPassword(e.target.value)
            }} type="password" placeholder="Enter your password"/><br/>
           
           <button type="button" onClick={submitData}></button><br/>

            <Link to="/">Login</Link>           
        </form>
    </div>
    
    )
    
}
export default Register;