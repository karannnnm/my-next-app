import { NextResponse } from 'next/server';
import { GetObjectCommand } from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import s3Client from '../../../../awsConfig';

export async function GET(request: Request) {
    const { searchParams } = new URL(request.url);
    console.log(searchParams);
    console.log(request);
    const fileName = searchParams.get('fileName');

    if (!fileName) {
        return NextResponse.json({ error: 'File name is required' }, { status: 400 });
    }

    try {
        const command = new GetObjectCommand({
            Bucket: 'karansbucket1',
            Key: fileName,
        });

        const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 }); // URL valid for 1 hour

        return NextResponse.json({ url: signedUrl });
    } catch (error) {
        console.error('Error generating signed URL:', error);
        return NextResponse.json({ error: 'Failed to generate signed URL' }, { status: 500 });
    }
}
