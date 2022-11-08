import React from "react";
import Axios from "../Axios/Axios";

const useAuth =()=>{
    
     const Login= async (data)=>{
            const {email , password} = data
            try{
               const response = await Axios.post("login",{email,password})
                localStorage.setItem("Token",response.token)
            }
            catch(error){
                 console.log("Login Error",error)
            }
     }
    const Register =async (data)=>{
          const {name , email , password , phone} = data
          try {
           const response =await Axios.post("register",{name,email,password,phone})
            localStorage.setItem("Token",response.token)
          }
          catch(error){
            console.log("Register Error",error)
          }
    }

    const Logout =()=>{
        localStorage.clear()
    }

    return Login , Register ,Logout
}