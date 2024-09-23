'use client'
import Card from "@/components/Card";
import { useState } from "react";



export default function Users(){
    const [count,setCount] = useState(0);
    
    const increment = ()=>{
        setCount(count+1)
    }


    return(
        <Card>
            User<br/>
            <div style={{fontFamily:'cursive',position:'relative',top:'40px',inlineSize:'400px',color:'red'}}>
                (this is test to show that state is maintained even if other slots(component) change/update in parallel routes)<br/>
                <button onClick={increment}>Current:{count}</button>
            </div>

        </Card>
    )
}