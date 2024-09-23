import Image from "next/image"
import Link from "next/link"
import photoArray from './wonder'


export default function PhotoFeed() {
  return (
    <main className="container mx-auto">
      <h1 className="text-center text-3xl font-bold my-4">Photo Feed</h1>
      <div className="grid justify-around align-center m-10 grid-cols-1 md:grid-cols-3 gap-10">
        {
          photoArray.map((currPhoto)=>(
            <Link key={currPhoto.id} href={`/photo-feed/${currPhoto.id}`}>
              <Image
                alt={currPhoto.alt}
                src={currPhoto.src}
                className="w-full object-cover aspect-square"
              />
            </Link>
          ))}
      </div>
    </main>
  )
}
