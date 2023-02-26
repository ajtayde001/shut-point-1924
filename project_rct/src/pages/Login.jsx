import React from 'react'
import { useState, useContext } from 'react'
import { AuthConetxt } from '../Context/AuthContextProvider';
import { Link, Navigate } from 'react-router-dom'
// import { Link } from "react-router-dom";
export default function Login() {

  let data = JSON.parse(localStorage.getItem("account-data"));
  if (data == null) {
    data = []
  }
  // console.log(data)

  const { isAuth, login} = useContext(AuthConetxt);
  const [email, setlogin] = useState("")
  const [password, setpass] = useState("")
  const [name, setname] = useState("Pleas LogIn")

  const submitChange = (e) => {
    e.preventDefault();

    let id = 0
    let icard = false
    let uservalue=""
    for (let i = 0; i < data.length; i++) {

      if (data[i].email == email) {
        uservalue=data[i].name
        if (data[i].password == password) {

          icard = true
         
          id = i
          // console.log("done")
        }
      }
    }
    console.log(uservalue)
    if (icard) {

      setname("Sign in Successful")
       console.log(uservalue)
      login(uservalue)

    } else {

      setname("Wrong Credentials!")

      // alert("wrong credentials")
    }
  }
  // console.log(user)
  if (isAuth) {
    return <Navigate to={"/men"} />
  }
  return (

    // <div className="main" >



      <div className="logIn">

        <form className="modal-content">
          <div style={{
            width: "40%",
            margin: "auto",
            marginTop: " 5%",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            padding: "30px",
            paddingTop: "2%",
          }}>
             <Link to="/" ><div  style={{ textAlign:"center"}}className="logo"><img src={require('../images/logo.png')} style={{ width: 40, height: 30 }} /><b style={{ marginTop: 10 ,textAlign:"center"}}>Indian Eagle</b></div></Link>
            <h2 style={{ fontSize: "30px" }}>{name}</h2>


            <label for="email"><b>Email</b></label>
            <input type="email" placeholder="Enter Email" id="email" onChange={(e) => setlogin(e.target.value)} />

            <label for="psw"><b>Password</b></label>
            <input type="password" placeholder="Enter Password" id="password" onChange={(e) => setpass(e.target.value)} />

            {/* <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> */}

            <div className="clearfix">

              <button style={{backgroundColor:"black",color:"white",height:"50px"}} type="submit" id="signupbtn" onClick={submitChange}>Log In</button>


            </div>
            <div style={{marginTop:"20px",height:"50px"}}> <h1> IF You Haven`t Account <Link to={"/singup"}>----SingUp</Link> </h1></div>
          </div>
        </form>
      </div>

    // </div>


  )


}

