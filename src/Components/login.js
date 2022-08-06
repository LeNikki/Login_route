import React from "react"
import login_img from "./assets/login_img.jpg"
import { Link, useNavigate } from "react-router-dom"

export default function Login(props){
     
    /*If authorized upon submit form, route to dashboard page */
    let navigate = useNavigate()
    function Submit(event){
        event.preventDefault()
       
        if(props.authorize===true){
            navigate("/profile")
            alert("Signed in")
        }
        else{
            alert("Incorrect password and email combination\n Please refer to the userbase.js file to access login.\n")
        }
    }
    
   
    return(
       <div className = "form">
        <form    className="login-form" onSubmit={Submit}>
            <h1 className="Login">Login Page</h1>
           
            <img className="login-image" src={login_img} alt="login"></img>
            <br></br>
            <input 
                type = "email"
                className="email" 
                placeholder="Enter email" 
                onChange={(event)=>{props.inputChange(event)}}
                value = {props.userEmail}
                name="email"
                
            />
           
            <br></br>
            <div className="input-pass">
            <input 
                type = {props.view ? "text": "password" }
                className="password"
                placeholder="Enter password"
                onChange={(event)=>{props.inputChange(event)}}
                value = {props.userPass}
                name="password" 
            
            /> 
            <span>
            <i id="eye" class= {props.view ? "fa fa-eye" : "fa fa-eye-slash" } aria-hidden="true" onClick = {props.handleView}></i>
            </span> 
            </div>
            <br></br>
            <button className="button">Submit</button>
            <p className="note">Please refer to the userbase.js file to access login.</p>
        </form>
        </div>
    
    )
}