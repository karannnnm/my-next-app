import { NextResponse } from "next/server";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import s3Client from "../../../../awsConfig";


export async function POST(request:Request){            //request is the request sent from client
    console.log("------------------server side")
    
    try{
        const formData = await request.formData();      //since request is a formData we extract it to variable

        const file = formData.get('file') as File;  //we grab the "file" from the formData, sent by client

        if (!file || typeof file === "string") {       //if no file or of invalid type send 400 error
            console.log("ERROR IN GRABBING FILE IN SERVER");
            return NextResponse.json({error:"NO FILE PROVIDED"},{status:400});
        }

        const arrayBuff = await file.arrayBuffer();     //arraybuffer converts the file content to binary,needed by aws

        const uploadParams = {                          //getting ready to send the file to bucket
            Bucket:"karansbucket1",
            Key:file.name,
            Body:Buffer.from(arrayBuff)
        };

    
        await s3Client.send(new PutObjectCommand(uploadParams));    //sending the file
        return NextResponse.json({message:"File uploaded successfully"})
    }    
    catch (error) {                                             //if error in server side.
        console.log("server error");
        return NextResponse.json({error:"Upload Error"},{status:500})
    }
}
