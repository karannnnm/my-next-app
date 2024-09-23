'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"



const navLinks = [
    {name:'login' , path :'/login'},
    {name:'register' , path:'/register'},
    //{name:'forgot-password' , path:'/forgot-password'}
]

export default function AuthLayout({
    children,
}:  {
    children:React.ReactNode
})  {
    const pathName = usePathname();

    return(
        <div 
        style={{
            color:'maroon',
            padding:'20px',
            
            
        }}
        >
            {
                navLinks.map(item=>{
                    const isActive = pathName.startsWith(item.path)
                    return <Link 
                            href={item.path} 
                            key={item.name}
                            style={{position:'relative',
                                    left:'780px',
                                    fontWeight:isActive?'bolder':'lighter',
                                    color:isActive?'red':'black'
                            }}
                            >
                                {item.name}
                            <br/>
                            </Link>
                })
            }
            {children}         
            
        
        </div>
    )
}
