import React from 'react'
import { useState } from 'react';

function Addtask({AddTask,HideFormOnSubmit}) {

    const [taskHeader, settaskHeader] = useState('');
    const [date, setdate] = useState('');
    const [Reminder, setReminder] = useState(false);


    const onSubmit = (e)=>{
        e.preventDefault()
        if(!taskHeader || !date ){
           return alert('please FIll the provided fields for the task')
        }
     //Processing form data
        AddTask({taskHeader,date,Reminder})
      //clearing the form after submission
        settaskHeader('')
        setdate('')
        setReminder(false)
      //hiding the form after submission
        HideFormOnSubmit()
    }


  return (
   <form className='add-form'onSubmit={onSubmit}>
       <div className="form-control">
           <label htmlFor="">Task</label>
           <input type="text" placeholder='Add Task' value={taskHeader} onChange={(e)=>{
               settaskHeader(e.target.value)
           }} />
       </div>
       <div className="form-control">
           <label htmlFor="">Date</label>
           <input type="Date" placeholder='Add Task' value={date} onChange={(e)=>{
               setdate(e.target.value)
           }} />
       </div>
       <div className="form-control-check">
           <label htmlFor="">Set Reminder</label>
           <input type="checkbox" value={Reminder} checked={Reminder} onChange={(e)=>{
              setReminder(e.currentTarget.checked) 
           }}/>
       </div>
       <input type="submit" value="Save Task"  className='btn btn-block'/>
   </form>
      
  )
}

export default Addtask
