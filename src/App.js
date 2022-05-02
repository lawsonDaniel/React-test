
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
 
  //toggle reminder
  const toggleReminder = (id)=>{
   setTask(
     Task.map((task)=>{
     return  task.id === id ? {...task,Reminder : !task.Reminder} : task
     })
   )
  }
  
  const [Toggler,setToggler] = useState(false)
  const showAddForm = ()=>{
    setToggler(!Toggler)
  }
  

  return (
    <div className="container">
       <div className="header">
        <Header />
       <Button color="red" text="Add" onClick={showAddForm} />
   </div>

   {
     Task.length > 0 ?  <Tasks  task={Task} onDelect={delect} onToggle={toggleReminder}  /> : 'You dont have any task left'
   }
    {
     Toggler ? <Addtask setTask={setTask} Task={Task} /> : null
    }
    </div>
  );
}

export default App;
