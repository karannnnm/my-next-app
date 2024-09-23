"use client"
import {useState,ChangeEvent} from 'react'
// import s3Client from '../../../../awsConfig'
// import { PutObjectCommand } from '@aws-sdk/client-s3'



function FileUpload() {
    const [selectedFile,setSelectedFile] = useState<File|null>(null);   //state to hold file
    const [fileName,setFilename] = useState<String|null>("");

    const handleFileInputChange = (event: ChangeEvent<HTMLInputElement>)=>{
        console.log("selecting file");
        if(event.target.files && event.target.files.length>0){     //event.target.files can contain many files.WE grab the first file.
            setSelectedFile(event.target.files[0]);
        }
    };

    const handleFileSubmit=async ()=>{              //if error in uploading file to browser
        if(!selectedFile){
            alert("Please select a file!!")
            return;
        };
    
        const formData = new FormData();            //make a new formdata.Contains key value pairs and Used for fetch() 
        formData.append("file",selectedFile);
        
        try{
            alert("Sending file to server side")
            const response = await fetch('/api/upload',{        //SENDING THE REQUEST TO SERVER
                method:"POST",
                body:formData
            });
            if(response.ok){
                alert("FILE UPLOADED successfully");
            }else
            {
                alert("UPLOAD FAILED :(");
            }
        }
        catch(error){
            console.log(error)
            alert(error);
        }
    }

    
    const inputChange=(e:ChangeEvent<HTMLInputElement>)=>{
        setFilename(e.target.value);
    }

    const handlDownload=async ()=>{
        if(!fileName){
            alert("Please enter the name of file!")
            return;
        }
        const response = await fetch(`/api/download?fileName=${fileName}`);

        if(response.ok){
            const {url} = await response.json();
            window.open(url,'_blank');
        }else{
            alert("failed");
        }
    }


    
  return (
    <div className=''>
        <h1 className="text-3xl font-medium leading-tight tracking-tighter">Welcome to file Upload Page</h1><br/>
        <input type='file' onChange={handleFileInputChange}/><br/>
        <button className=" bg-red-400 "onClick={handleFileSubmit}>Click to upload</button>
        <div className='relative left-80 text-red-700'>
            <input className='bg-yellow-700'type='text' onChange={inputChange} placeholder='enter file name'/><br/>
            <button onClick = {handlDownload}>Click to Download</button>
        </div>
    </div>
  );
}

export default FileUpload
