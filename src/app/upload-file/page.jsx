'use client'
import axios from 'axios';
import React from 'react'

const uploadfile = () => {

    const uploadTocloud = (e)=>{
        const file = e.target.files[0];
        if(!file) return;
        const fd = new FormData();
        fd.append('file',file);
        fd.append('upload_preset','myuploadpreset');
        fd.append('cloud_name','danllyhpl');
        axios.post('https://api.cloudinary.com/v1_1/danllyhpl/image/upload',fd, {headers:{'Content-Type':'multipart/form-data'}})
        .then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        });
    }
  return (
    <div> <h1 className='text-center mt-10 text-3xl font-bold '>Upload your file Here

    </h1>
    <input type='file' accept='image/* ' onChange={uploadTocloud}/>
    </div>
  )
}

export default uploadfile