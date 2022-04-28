import React from "react";
import { useState } from "react";
import Button from "./commponents/Button";
import Header from "./commponents/Header";
import Task from "./commponents/Task";
import TaskList from './task.json'


function App() {

  const getTaskList = ()=>{
      TaskList.map((task)=>{
        
      })
  }

  const [tasks, settasks] = useState({
    TaskList
  });



  return (
    <div className="container">
       <div className="header">
        <Header />
       <Button color="red" text="Add" />
   </div>
      <Task taskName={tasks.TaskList[0].id} />
    </div>
  );
}

export default App;
