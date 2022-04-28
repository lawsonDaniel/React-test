import React from 'react'
import Task from './Task'

function Tasks({task}) {
  return (
    <div>
        {
            task.map((tasks)=>{
                return(
                    <Task key={tasks.id} taskName={tasks.taskHeader} />
                )
            })
        }
    </div>
  )
}

export default Tasks