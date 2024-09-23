import { Metadata } from "next"

export const generateMetadata = async ({params}:Props):Promise<Metadata>=>{

    
    const newDescription:string = await new Promise((resolve)=>{
        setTimeout(()=>{resolve(`Description about product ${params.productId}`)},0)
    })
    return{
        title:`honest rdeviews`,
        description: newDescription
    }
} 

type Props = {
    params:{
        productId:string
    }
}

export default function ProductReviews({params}:Props) {
  return (
    <div>
        {`Reading review for product ${params.productId}`}
    </div>
  )
}
