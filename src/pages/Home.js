import Todo from "./components/Todo";
import Clock from "./components/Clock";
import { useState } from 'react';

function Home() {
  const [even, setEven] = useState([])  
  return (
  <div className="container">
    <Todo setEven={setEven}/>
    <Clock even = {even}/>
  </div>
);
}

export default Home;