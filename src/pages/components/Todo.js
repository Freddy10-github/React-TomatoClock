/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Edit from './Todo/Edit';
import List from './Todo/List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { useEffect, useState } from 'react';

const TodoWarp = styled.div`
  height: 100vh;
  width: 40%;
  background-color: #272727;
  @media screen and (max-width: 800px) {
    height: 55vh;
    width: 100vw;    
  }
`
const Profile =styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin:auto;
  font-size: 10vw;

`
const Todo = ({ setCurrentTask }) => {
  const [work, setWork]=useState(JSON.parse(localStorage.getItem('myTodo')||[]));
  useEffect(()=>{
    localStorage.setItem('myTodo',JSON.stringify(work))
    console.log(localStorage)
  },[work])
  return (
    <TodoWarp>
      <Edit setWork={ setWork }></Edit>
      <List Listdata={ work } delWork={ setWork } setCurrentTask={ setCurrentTask }></List> 
      <Profile>
        {/* https://pjchender.blogspot.com/2020/05/relnoreferrer-targetblank.html */}
        <a href="https://freddy10-github.github.io/"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={fab.faBlogger}  color='#777'/></a>    
        <a href="https://github.com/Freddy10-github"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={fab.faGithub}  color='#777'/></a>         
        <a href="https://www.linkedin.com/in/freddy-lo/"  target="_blank" rel="noreferrer"><FontAwesomeIcon icon={fab.faLinkedin}  color='#777'/></a>        
      </Profile>
    </TodoWarp>
  );
};

export default Todo;