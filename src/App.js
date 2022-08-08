import React from "react"
import './App.css';
import { BrowserRouter as Router, Routes, 
  Route} from "react-router-dom";
import Login from "./Components/login.js"
import Profile from "./Components/Profile.js"
import data from "./Components/userbase.js"

function App() {
  /* Password input view or hide*/
  const [view, setView] = React.useState(false)
  function handleView(){
      setView((prev=>!prev))
  }

  /* User input, about to login*/
  const [user, setUser] = React.useState({
    username: "",
    email: "",
    password: "",
    Cpassword: "",
  })

     /*onChange of input: Set values for user input*/
     function handleChange(event){
      const {name, value} = event.target
      setUser((prev)=>{
         return {
          ...prev,
          [name]: value
         } 
      })
      console.log(user)
    }

  
  /* User database*/
  const [allUser, setAlluser] = React.useState(data)
  
 
  /* Checks if user input matches any user from the database*/
  const exist = allUser.map((u)=>{
    if (user.email === u.email ){
        if(user.password === u.password){
            return true
        }
    }
   return false
    })
    
  /* If there's a match in users, authorize is true*/
  let authorize = exist.includes(true)


  return (
    <div className="App">
     
      <Router basename={window.location.pathname || ''}>
      
        <Routes>
          <Route path="/"  
          element={<Login view={view} 
                      handleView = {handleView}
                      inputChange = {handleChange}
                      userEmail = {user.email}
                      userPass= {user.password}
                      authorize = {authorize}
                      />}/>

          <Route  path="/profile" element ={<Profile/>} />
          
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
