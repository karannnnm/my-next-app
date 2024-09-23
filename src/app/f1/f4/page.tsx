import Link from "next/link";


export default function F4() {
  return (
    <h3>
      Example of one level above route interception<br/>  
      This is f4 folder's page.tsx.<br/>
      <Link href={'/f1/f3'}>f3 page</Link>
    </h3>
  )
}
