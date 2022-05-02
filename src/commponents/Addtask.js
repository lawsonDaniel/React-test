import React from 'react'
import { useState } from 'react';

function Addtask({AddTask}) {

    const [taskHeader, setFormTask] = useState('');
    const [FormTime, setFormTime] = useState('');
    const [Reminder, setFormReminder] = useState(false);


    const onSubmit = (e)=>{
        e.preventDefault()
        if(!taskHeader){
           return console.error('please FIll the provided fields for the task')
        }
        AddTask({taskHeader,FormTime,Reminder})
        setFormTask('')
        setFormTime('')
        setFormReminder(false)
    }


  return (
   <form className='add-form'onSubmit={onSubmit}>
       <div className="form-control">
           <label htmlFor="">Task</label>
           <input type="text" placeholder='Add Task' value={taskHeader} onChange={(e)=>{
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
           <input type="checkbox" value={Reminder} checked={Reminder} onChange={(e)=>{
               setFormReminder(e.currentTarget.checked) 
           }}/>
       </div>
       <input type="submit" value="Save Task"  className='btn btn-block'/>
   </form>
      
  )
}

export default Addtask
