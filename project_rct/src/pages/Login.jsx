import React from 'react'
import {useState,useContext} from 'react'
import { AuthConetxt } from '../Context/AuthContextProvider';
import {Navigate} from 'react-router-dom'
export default function Login() {
    const {isAuth,login}= useContext(AuthConetxt);
    const [email, setlogin]=useState("")
    const [password, setpass]=useState("")
    // const [dttata, setData]=useState("")
   console.log("eve.holt@reqres.in")
   console.log("cityslicka")

    const submitChange = (e) => {
        console.log(email)
        console.log(password)
      
        e.preventDefault();
        const valueIN={
            email,
            password
        }

        console.log(valueIN)
        const loginApi = "https://reqres.in/api/login";
    
        fetch(loginApi, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json"
          },
          body: JSON.stringify(valueIN)
        })
          .then((response) => response.json())
          .then((data)=>{
            login(data.token)
           
          })
      
          .catch((err) => {
            console.log(err);
          });
      };
  // console.log(dttata)

  if(isAuth){
    return <Navigate to={"/"}/>
  }
    return (
        <div>
            <form className = "auth_form"  >
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "email"
                    className = "email"
                    placeholder = "Enter Email"
                    onChange={(e)=>setlogin(e.target.value)}
                />
                <br />
                <input
                    style = {{padding:"5px", margin: "10px", width: 200}}
                    type = "password"
                    className = "password"
                    placeholder = "Enter password"
                    onChange={(e)=>setpass(e.target.value)}
                />
                <br />
                <input className = "submit" type = "submit" onClick={submitChange}/>

            </form>  
                          
        </div>
    )
}