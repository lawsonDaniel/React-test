
import Button from "./commponents/Button";
import Header from "./commponents/Header";
import Tasks from "./commponents/Tasks";
import TaskList from './task.json'
import { useState } from 'react';


function App() {
  const [Task, setTask] = useState([...TaskList]);
  const delect = (id)=>{
      setTask(Task.filter((task)=>{
          return(
            task.id !== id
          )
      }))
  }
 
  //toggle remider
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
       <Button color="red" text="Add" />
   </div>{
     Task.length > 0 ?  <Tasks  task={Task} onDelect={delect} onToggle={toggleReminder}  /> : 'You dont have any task left'
   }
    
    </div>
  );
}

export default App;
