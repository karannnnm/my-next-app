import { StaticImageData } from 'next/image';
import photo1 from './photos/photo1.png';
import photo2 from './photos/photo2.webp';
import photo3 from './photos/photo3.jpg';
import images from './photos/images.jpeg'; 

export type ImageType = {
    src:StaticImageData,
    alt:string,
    id:string,
    location:string,
    photographer:string    
}


const imageArray:ImageType[] = [
    {
        src:photo1,
        alt:'berserk',
        id:'1',
        location:'Eclipse',
        photographer:'Griffith'
    },
    {
        src:photo2,
        alt:'bojack',
        id:'2',
        location:'USA',
        photographer:'bojack'
    },
    {
        src:photo3,
        alt:'Office',
        id:'3',
        location:'Scranton',
        photographer:'Micheal'
    },
    {
        src:images,
        alt:'sa',
        id:'4',
        location:'Scrdwaanton',
        photographer:'Miwdacheal'
    }    
]

export default imageArray;