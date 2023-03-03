import {createContext,useState} from 'react'

export const AuthConetxt=createContext()

function AuthConetxtProvider({children}){
const[isAuth,setIsAth]=useState(false)
const[serach,setSearch]=useState('')
const[user,setUser]=useState('')
const login=(e)=>{
    setIsAth(true)
    setUser(e)
}
const logOut=()=>{
    setIsAth(false)
    setUser("")
}

return <AuthConetxt.Provider value={{isAuth,user,logOut,login,serach,setSearch}}>{children}</AuthConetxt.Provider>
}

export default AuthConetxtProvider