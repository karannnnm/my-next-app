'use client'
import { useState } from "react"
import userDetailsStorage from "@/app/_userDetails/userDetails"



    
export default function Register () {

    const [userDetails,setUserDetails] = useState({name:'',password:''})
    
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserDetails({...userDetails,name:e.target.value})
    }
    const handlePasswordChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setUserDetails({...userDetails,password:e.target.value})
    }
    const handleFormSubmit = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(userDetails.name==='')throw new Error('empty username')
        userDetailsStorage.push(userDetails);
    }

    
    return(
    <div>
       
        <form className="inputForm" onSubmit={handleFormSubmit}>
            <h1>Register Page</h1>
            <label htmlFor="username">
                <p>Enter unique user name : </p>
                <input type="text" id="username" value={userDetails.name} onChange={handleNameChange}></input>
            </label>

            <label htmlFor="password">
                <p>Enter a strong password :</p>
                <input type="password" id='password' value={userDetails.password} onChange={handlePasswordChange}></input><br/>
            </label>
            <button>submit</button>
        </form>
       
    </div>
    
    )
}