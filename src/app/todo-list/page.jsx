'use client'
import React, { useState } from 'react'



const Todolist = () => {
    

    // const [num, setNum] = useState(10)

const [taskList, settaskList] = useState([
{text:"Learn HTML",completed:false, createdAt:new Date() },
{text:"Learn CSS",completed:false, createdAt:new Date() },
{text:"Learn JavaScript",completed:false, createdAt:new Date() },
]);


    const addTask = (e)=>{
        if(e.code==='Enter'){
            console.log(e.target.value);

        }
    };
  return (
    <div className='max-w-[80%] mx-auto'>
    {/* {num}
    <button onClick={()=>{setNum(num + 1); console.log(num);}}>Add Number</button> */}
    <h1 className='text-5xl font-bold text-center'>ToDo List</h1>
    <div className='border-2 border-black rounded-md'>
    <div className='border-b-2 border-gray-600 p-4'>
        <input placeholder='Add a new task'
         className='border-2 border-blue-500 rounded p-3 w-full'
          type='text'
            onKeyDown={addTask}
          />
    </div>
<div className='p-5'>
  {
    taskList.map((task,index)=>{return <div key={index}>
    <p>{task.text}</p>
    <div>
        <button>Edit</button>
        <button>Delete</button>
    </div>

    </div>})
  }
</div>
    </div>
    </div>
  )
}

export default Todolist;
