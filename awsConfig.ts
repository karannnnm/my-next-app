import { S3Client } from "@aws-sdk/client-s3"

const s3Client = new S3Client({

    region:process.env.NEXT_PUBLIC_AWS_REGION,
    credentials:{
        accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID!,        //non null operator !, tells typeScript that this value can never be null or undefined
        
        secretAccessKey:process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY!
    },
});

export default s3Client;