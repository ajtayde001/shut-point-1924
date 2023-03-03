// import React from 'react'
// import {useState,useContext} from 'react'
// import { AuthConetxt } from '../Context/AuthContextProvider';
// import {Navigate} from 'react-router-dom'
// export default function Login() {
//     const {isAuth,login}= useContext(AuthConetxt);
//     const [email, setlogin]=useState("")
//     const [password, setpass]=useState("")
//     // const [dttata, setData]=useState("")
//    console.log("eve.holt@reqres.in")
//    console.log("cityslicka")

//     const submitChange = (e) => {
//         console.log(email)
//         console.log(password)
      
//         e.preventDefault();
//         const valueIN={
//             email,
//             password
//         }

//         console.log(valueIN)
//         const loginApi = "https://reqres.in/api/login";
    
//         fetch(loginApi, {
//           method: "POST",
//           headers: {
//             Accept: "application/json, text/plain, */*",
//             "Content-Type": "application/json"
//           },
//           body: JSON.stringify(valueIN)
//         })
//           .then((response) => response.json())
//           .then((data)=>{
//             login(data.token)
           
//           })
      
//           .catch((err) => {
//             console.log(err);
//           });
//       };
  

//   if(isAuth){
//     return <Navigate to={"/"}/>
//   }
//     return (
//         <div>
//             <form className = "auth_form"  >
//                 <input
//                     style = {{padding:"5px", margin: "10px", width: 200}}
//                     type = "email"
//                     className = "email"
//                     placeholder = "Enter Email"
//                     onChange={(e)=>setlogin(e.target.value)}
//                 />
//                 <br />
//                 <input
//                     style = {{padding:"5px", margin: "10px", width: 200}}
//                     type = "password"
//                     className = "password"
//                     placeholder = "Enter password"
//                     onChange={(e)=>setpass(e.target.value)}
//                 />
//                 <br />
//                 <input className = "submit" type = "submit" onClick={submitChange}/>

//             </form>  
                          
//         </div>
//     )
// }



// "{+++++++++++++++}"
import { Link } from "react-router-dom";
import "../style/singup.css"
import React from 'react'
import {useState,useContext} from 'react'
import { AuthConetxt } from '../Context/AuthContextProvider';
import {Navigate} from 'react-router-dom'

function SingUp(){
    let data = JSON.parse(localStorage.getItem("account-data"));
    if (data == null) {
      data = []
    }
    const {isAuth,login,logOut}= useContext(AuthConetxt);
    const [email, setlogin]=useState("")
    const [password, setpass]=useState("")
    const [name, setname]=useState("")
    const [nameLoag, setnamevalue]=useState("Pleas SingUp")
    const submitChange = (e) => {
        e.preventDefault();
        let isnew = true
        
        for (let i = 0; i < data.length; i++) {
            if (data[i].email == email) {
              setnamevalue("This Email Is Already Used")
                isnew = false
            }
        }
    if(isnew==true){
      setnamevalue("Account Created Successful")
        login(name)
        const valueIN={
            name,
            email,
            password
        }
    data.push(valueIN);
    localStorage.setItem("account-data", JSON.stringify(data));
    console.log(data)
        
    
        // console.log(valueIN)
        
      };
    }
    if(isAuth){
      logOut()
        return <Navigate to={"/login"}/>
    
           
          }
return(
   
// <div className="main" style={{ width: "40%",
//   margin: "auto",
//   marginTop:" 5%",
//   boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
//   paddingTop: "2%",}}>



 <div id="id01" className="singUpal">
 
   <form className="modal-content" style={{ width: "40%",
margin: "auto",
marginTop:"5%",
boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
padding:"30px",
paddingTop: "2%"}}>
     <div className="container">
     <Link to="/" ><div  style={{ textAlign:"center"}}className="logo"><img src={require('../images/logo.png')} style={{ width: 40, height: 30 }} /><b style={{ marginTop: 10 ,textAlign:"center"}}>Indian Eagle</b></div></Link>

     <h2 style={{fontSize:"30px"}}>{nameLoag}</h2>
       <label for="email"><b>Name</b></label>
       <input type="text" id="name" placeholder="Enter Your Name"
        onChange={(e)=>setname(e.target.value)}/>

       <label for="email"><b>Email</b></label>
       <input type="email" placeholder="Enter Email" id="email"  onChange={(e)=>setlogin(e.target.value)}/>

       <label for="psw"><b>Password</b></label>
       <input type="password" placeholder="Enter Password" id="password"  onChange={(e)=>setpass(e.target.value)}/>

       {/* <p>By creating an account you agree to our <a href="#" style="color:dodgerblue">Terms & Privacy</a>.</p> */}

       <div className="clearfix">

         <button style={{backgroundColor:"black",color:"white",height:"50px"}} type="submit" id="signupbtn" onClick={submitChange}>Sign Up</button>

        
       </div>
     </div>
   </form>
 </div>

// </div>

  
)


}

export default SingUp