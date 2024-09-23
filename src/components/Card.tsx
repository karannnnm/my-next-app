import { relative } from "path"

export default function Card ({children}:{children:React.ReactNode}){
    
    const myStyle:React.CSSProperties = {
        padding:'80px',
        margin:'23px',
        boxShadow:'12px 12px 9px 1px rgb(0,0,0,0.2)',
        border:'1px solid black',
        display:'flex',
        justifyContent:'center',
        alignItems:'center'
    }

    return <div style={myStyle}>{children}</div>

}