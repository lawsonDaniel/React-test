import React from 'react'
import Task from './Task'

function Tasks({task, onDelect,onToggleReminder}) {
  return (
    <div>
        {
            task.map((tasks)=>{
                return(
                    <Task key={tasks.id} taskName={tasks.taskHeader}  task={tasks} onToggleReminder={onToggleReminder} onDelect={onDelect} taskId={tasks.id}/>
                )
            })
        }
    </div>
  )
}

export default Tasks