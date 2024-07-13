'use client';
import { ClientPageRoot } from 'next/dist/client/components/client-page';
import React from 'react';


const EventHandling = () => {
    const previewImage = (e)=>{
        console.log(e.target.files);
        const file =e.target.files[0];
        //initialize file reader
        const reader = new FileReader();
        //what to do when image is loaded
        reader.onload= (data)=>{
            const img = new Image();
            img.src=data.target.result;
            document.body.append(img);
        };
        //load the image
        reader.readAsDataURL(file);
    }
  return (
    <div className='max-w-5xl mx-auto '>
      <h1 className='text-3xl text-center font-bold my-5'></h1>

      <button className='bg-blue-500 p-3 text-white rounded-md ' onClick={ () => {alert('Button was clicked'); } }>Click me</button>
      <input className='border-2 rounded-md border-gray-500 py-1 px-3 w-full mt-3' onChange={(e)=>{console.log(e.target.value)}}
        type="text"
      />
      <input type='color' className='mt-5'
      onChange={(e)=>{document.body.style.backgroundColor=e.target.value} }
      />
    <input type="file"
        onChange={(e)=>{console.log(e.target.files);}}
    />
    <input/>
    </div>
  )
}

export default EventHandling;
