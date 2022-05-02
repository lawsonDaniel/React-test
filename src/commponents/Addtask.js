import React from 'react'
import { useState } from 'react';

function Addtask() {

    const [FormTask, setFormTask] = useState('');
    const [FormTime, setFormTime] = useState('');
    const [FormReminder, setFormReminder] = useState('');


    const onSubmit = (e)=>{
        e.preventDefault
    }


  return (
   <form className='add-form'onSubmit={onSubmit}>
       <div className="form-control">
           <label htmlFor="">Task</label>
           <input type="text" placeholder='Add Task' value={FormTask} />
       </div>
       <div className="form-control">
           <label htmlFor="">Day & Time</label>
           <input type="text" placeholder='Add Task' value={FormTime} />
       </div>
       <div className="form-control-check">
           <label htmlFor="">Set Reminder</label>
           <input type="checkbox" />
       </div>
       <input type="submit" value="Save Task"  className='btn btn-block'/>
   </form>
      
  )
}

export default Addtask
