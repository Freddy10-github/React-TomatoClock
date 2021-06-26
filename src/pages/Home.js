import Todo from "./components/Todo";
import Clock from "./components/Clock";
import { useState } from 'react';

function Home() {
  const [currentTask, setCurrentTask] = useState('選擇任務')  
  const [comment, setComment] = useState([])  
  console.log(comment);
  return (
  <div className="container">
    <Todo setCurrentTask={setCurrentTask} setComment={setComment}/>
    <Clock currentTask = {currentTask} comment={comment}/>
  </div>
);
}

export default Home;