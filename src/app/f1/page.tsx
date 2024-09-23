import Link from "next/link";


export default function F1() {
  return (
    <>
      f1 segment
      <div><Link href={'/f1/f2'}>Link to f2</Link></div>
    </>
  )
}
