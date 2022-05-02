import React from 'react'
import Task from './Task'

function Tasks({task, onDelect,onToggle}) {
  return (
    <div>
        {
            task.map((tasks)=>{
                return(
                    <Task key={tasks.id} taskName={tasks.taskHeader}  task={tasks} onToggle={onToggle} onDelect={onDelect} taskId={tasks.id}/>
                )
            })
        }
    </div>
  )
}

export default Tasks