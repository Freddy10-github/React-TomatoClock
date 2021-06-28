import Todo from "./components/Todo";
import Clock from "./components/Clock";
import { useState } from 'react';

function Home() {
  const [currentTask, setCurrentTask] = useState('選擇任務')  
  return (
  <div className="container">
    <Todo setCurrentTask={setCurrentTask}/>
    <Clock currentTask = {currentTask}/>
  </div>
);
}

export default Home;