import {createContext,useState} from 'react'

export const AuthConetxt=createContext()

function AuthConetxtProvider({children}){
const[isAuth,setIsAth]=useState(false)

const login=()=>{
    setIsAth(true)
}
const logOut=()=>{
    setIsAth(false)
}

return <AuthConetxt.Provider value={{isAuth,logOut,login}}>{children}</AuthConetxt.Provider>
}

export default AuthConetxtProvider