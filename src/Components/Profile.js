import React from "react"
import { useNavigate } from "react-router-dom"
import Image from "./assets/profile.jpg"
function Profile (){

    /*Will navigate back to login page */
    let navigate = useNavigate()
    function Submit(event){
        event.preventDefault()
        navigate("/")
        alert("Logged out")
    }

   return(
    <div className="Dashboard">
        <nav className="nav-dashboard">
            <h1>Welcome to your Dashboard</h1>
        </nav>
        <div className="welcome-mess">
                <p>Project by: Nicole Satiembre<br></br><br></br>
                    This project demonstrates Login authentication,
                    as well as React router to route to pages. 
                </p>
                <img src={Image} alt="image" width="100px"></img>
        </div>
           
            <button className="button" onClick={Submit}>Logout</button>
            <br></br>
    </div>
   )
}
export default Profile