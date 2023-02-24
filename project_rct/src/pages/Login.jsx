import React from 'react'
import {useState,useContext} from 'react'
import { AuthConetxt } from '../Context/AuthContextProvider';
import {Link, Navigate} from 'react-router-dom'
export default function Login() {
  
  let data = JSON.parse(localStorage.getItem("account-data"));
  if (data == null) {
    data = []
  }
  const {isAuth,login}= useContext(AuthConetxt);
  const [email, setlogin]=useState("")
  const [password, setpass]=useState("")
  const [name, setname]=useState("Pleas LogIn")

  const submitChange = (e) => {
      e.preventDefault();
     
     let id=0
      let icard = false
      for (let i = 0; i < data.length; i++) {

          if (data[i].email == email) {

              if (data[i].password == password) {

                  icard = true

                  id=i

              }
          }
      }

      if (icard) {
          
        setname("Sign in Successful")
        
        login()

      } else {
     
        setname( "Wrong Credentials!")

          // alert("wrong credentials")
      }
  }
  if(isAuth){
    return <Navigate to={"/men"}/>
  }
return(
 
<div className="main" style={{ width: "40%",
margin: "auto",
marginTop:" 5%",
boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
paddingTop: "2%",}}>



<div className="modal">

 <form className="modal-content">
   <div className="container">
   <h2 style={{fontSize:"30px"}}>{name}</h2>
     

     <label for="email"><b>Email</b></label>
     <input type="email" placeholder="Enter Email" id="email"  onChange={(e)=>setlogin(e.target.value)}/>

     <label for="psw"><b>Password</b></label>
     <input type="password" placeholder="Enter Password" id="password"  onChange={(e)=>setpass(e.target.value)}/>

     {/* <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> */}

     <div className="clearfix">

       <button style={{backgroundColor:"green"}} type="submit" id="signupbtn" onClick={submitChange}>Log In</button>

      
     </div>
     <div> <h1> IF You Haven`t Account <Link to={"/singup"}>----SingUp</Link> </h1></div>
   </div>
 </form>
</div>

</div>


)


}

