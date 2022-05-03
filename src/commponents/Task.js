import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({onDelect,onToggleReminder,task}) {

  return (
        <div className={`task ${task.Reminder ? 'reminder': null}`} onDoubleClick={()=>{
          onToggleReminder(task.Id)
        }}>
        <h3>{task.taskHeader} <FaTimes style={{color:'red'}} onClick={()=>{
          onDelect(task.id)
        }}/></h3>
        <small>{`Date : ${task.date}`}</small>
        </div>
  )
}

export default Task