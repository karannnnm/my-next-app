import imageArray, { ImageType } from "../wonder";
import Image from "next/image";

export default function id({
    params : {id},
}:{
    params:{id:string};
}) {
    const photo:ImageType = imageArray.find((p)=>p.id===id)!;
    return (
        <div className="container mx-auto my-10">
            <div className="w-1/2 mx-auto">
                <div className="text-center text-2xl font-cursive my-4">{photo.alt}</div>
                <Image src={photo.src}
                     alt={photo.alt}
                     className="w-full object-cover max-h-[112vh] aspect-square"
                />

                <div className="bg-white py-3">
                    <h3>Location = {photo.location}</h3><br/>
                    <h3>Credits = {photo.photographer}</h3>
                </div>
            </div>
        </div>
  )
}
