'use client'
import { useRouter } from "next/navigation"

export default function Login(){
    const router = useRouter();
    return(
    <>
        <h1>Login page</h1>
        <input type="text" placeholder="Enter username"></input><br/>
        <input type="password" placeholder="Enter password"></input><br/><br/>
        <button>Log in</button>
        <button onClick={()=>{router.push('./forgot-password')}}>Forgot Password?</button> 
    </>

    )
}