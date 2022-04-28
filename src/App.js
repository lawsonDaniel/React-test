
import Button from "./commponents/Button";
import Header from "./commponents/Header";
import Tasks from "./commponents/Tasks";
import TaskList from './task.json'
import { useState } from 'react';


function App() {
  const [task, setstate] = useState([...TaskList]);
  return (
    <div className="container">
       <div className="header">
        <Header />
       <Button color="red" text="Add" />
   </div>
     <Tasks task={task}/>
    </div>
  );
}

export default App;
