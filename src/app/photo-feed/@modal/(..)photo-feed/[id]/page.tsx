import imageArray, { ImageType } from '@/app/photo-feed/wonder';
import Image from "next/image";
import Modal from '@/components/Modal';

export default function PhotoModal({
    params : {id},
}:{
    params:{id:string};
}) {
    const photo:ImageType = imageArray.find((p)=>p.id===id)!;
    
    
    return (
        <Modal>
            <Image
                src={photo.src}
                alt={photo.alt}
                className="w-full object-cover aspect-square"
            />

            <div className='bg-white p-4'>
                <h2 className='text-xl font-semibold'>{photo.alt}</h2>
                <h3>{photo.photographer}</h3>
                <h3>{photo.location}</h3>
            </div>
        </Modal>
  )
}
