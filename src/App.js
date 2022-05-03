
import Button from "./commponents/Button";
import Header from "./commponents/Header";
import Tasks from "./commponents/Tasks";
import TaskList from './task.json'
import { useState } from 'react';
import Addtask from "./commponents/Addtask";

function App() {
  const [Task, setTask] = useState([...TaskList]);
  const delect = (id)=>{
      setTask(Task.filter((task)=>{
          return(
            task.id !== id
          )
      }))
  }
  
//toggler to show form
  const [Toggler,setToggler] = useState(false)
  const showAddForm = ()=>{
    setToggler(!Toggler)
  }

  const AddTask = (task)=>{
    //generate a task id
   const id =  Math.floor(Math.random()*100) +1
   //adding the generated id to the form data
  const UpdatedTaskWithId = {id,...task}
  // setting the task
  console.log([...Task,UpdatedTaskWithId])
  setTask([...Task,UpdatedTaskWithId])
 
  }

    //toggle reminder
    const toggleReminder = (id)=>{
      setTask(
        Task.map((task)=>{
        return  task.id === id ? {...task,Reminder : !task.Reminder} : task
        })
      )
     }

  return (
    <div className="container">
       <div className="header">
        <Header />
       {
         Toggler ? null : <Button color="red" text="Add" onClick={showAddForm} />
       }
   </div>

   {
     Task.length > 0 ?  <Tasks  task={Task} onDelect={delect} onToggleReminder={toggleReminder}  /> : 'You dont have any task left'
   }
    {
     Toggler ? <Addtask AddTask={AddTask} HideFormOnSubmit={showAddForm} /> : null
    }
    </div>
  );
}

export default App;
