import React from 'react'
import { useState } from 'react';

function Addtask({setTask,Task}) {

    const [FormTask, setFormTask] = useState('');
    const [FormTime, setFormTime] = useState('');
    const [FormReminder, setFormReminder] = useState(false);


    const onSubmit = (e)=>{
        e.preventDefault()
        if(FormTask ==='' || FormTask === ''){
           return console.error('please FIll the provided fields for the task')
        }else{
           
        }
    }


  return (
   <form className='add-form'onSubmit={onSubmit}>
       <div className="form-control">
           <label htmlFor="">Task</label>
           <input type="text" placeholder='Add Task' value={FormTask} onChange={(e)=>{
               setFormTask(e.target.value)
           }} />
       </div>
       <div className="form-control">
           <label htmlFor="">Day & Time</label>
           <input type="text" placeholder='Add Task' value={FormTime} onChange={(e)=>{
               setFormTime(e.target.value)
           }} />
       </div>
       <div className="form-control-check">
           <label htmlFor="">Set Reminder</label>
           <input type="checkbox" value={FormReminder} onChange={(e)=>{
               setFormReminder(e.currentTarget.checked)
           }}/>
       </div>
       <input type="submit" value="Save Task"  className='btn btn-block'/>
   </form>
      
  )
}

export default Addtask
