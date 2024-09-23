
import Link from "next/link"
import './global.css'

export default function Home(){
    return (
    <div className="relative right-96 p-4 ">

        <div className="p-4 border-b-2 border-r-2 border-black relative right-32 bottom-4">
        <div className="mb-4 p-4 text-2xl leading-tight tracking-tighter ">
        <h1>Basic Routing Examples.</h1>
        <strong>(Links in color)</strong>
        </div>
        
            <h2 className="border-b-2 pb-1">List of all navigatable pages:</h2><br/>
            <ul>
                <li className="bg"><Link href={'/products'}>Products page</Link></li>
                <li className="bg-pink-200"><Link href={'/dashboard'}>Dashboard(parallel routes example)</Link></li>
                <br/>
                <li className="text-lg font-medium">For Authentication:</li>
                <ul className="bg-yellow-200">
                    <li><Link href={'/login'}>Login page</Link></li>
                    <li><Link href={'/register'}>Register page</Link></li>
                </ul><br/>
        
                
                <p className="text-lg font-medium">Examples of route interception:</p>
        <div style={{backgroundColor:'violet',fontWeight:'bold'}}>
                <li><Link href={'/f1'}>f1(intercepting routes example) (same level interception)</Link></li>
                <li><Link href={'/f1/f4'}>f4(intercepting routes example) (1 level above interception)</Link></li>
                <li>interception at root level can be done by prefexing (...)</li>
        </div><br/>
        <p className="text-lg font-medium">Example of parallel intercepting routes:</p>
        <li className="bg-red-400 "><Link href={'/photo-feed'}>Photo Feed.</Link></li>  
        </ul><br/>
        </div>
        
        <div className="p-4 relative left-[362px] bottom-[584px] border-black border-r-2 border-b-2">
            <div className="mb-4 p-4 text-2xl leading-tight tracking-tighter ">
                <h1>Route Handling Examples</h1>
                <strong>(Links in color)</strong>
            </div>
            <h2 className="border-b-2 pb-2">List of all navigatable pages:</h2><br/>
            <ul >
                <li className="bg-yellow-400"><Link href={'/hello'}>- basic example of route handling</Link></li>
            </ul>

        </div>
    
    </div>
    )
}