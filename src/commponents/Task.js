import React from 'react'
import {FaTimes} from 'react-icons/fa'

function Task({taskName,onDelect,taskId,onToggle,task}) {

  return (
        <div className={`task ${task.Reminder ? 'reminder': null}`} onDoubleClick={()=>{
          onToggle(taskId)
        }}>
        <h3>{taskName} <FaTimes style={{color:'red'}} onClick={()=>{
          onDelect(taskId)
        }}/></h3>
        </div>
  )
}

export default Task