import { NextResponse } from 'next/server';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import s3Client from '../../../../awsConfig';

export async function GET(request: Request) {               //request will be the argument we passed for GET from client
    const { searchParams } = new URL(request.url);          
    // console.log(searchParams);
    // console.log(request);
    const fileName = searchParams.get('fileName');          //retrive the filename from the query params

    if (!fileName) {                                        //if no name is passed. this case is also handled in client comp 
        return NextResponse.json({ error: 'File name is required' }, { status: 400 });
    }


    try {
        const command = new GetObjectCommand({              //this command will generate a signed url.
            Bucket: 'karansbucket1',
            Key: fileName,                                  //will generate only if the key:filename matches a key in the bucket
        });

        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); //url will expire in 1hr

        return NextResponse.json({ url: signedUrl });           //url is returned to user 
    } 
    
    catch (error) {                                                 //erroe
        console.error('Error generating signed URL:', error);
        return NextResponse.json({ error: 'Failed to generate signed URL' }, { status: 500 });
    }
}
