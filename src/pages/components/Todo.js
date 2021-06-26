/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Edit from './Todo/Edit';
import List from './Todo/List'
import { useState, useEffect, useCallback} from 'react';

const TodoWarp = styled.div`
  height: 100vh;
  width: 40%;
  background-color: #272727;
`
const Profile =styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  margin:auto;

  & .item{
    width: 20%;
    cursor: pointer;
    position: relative;
    
    
    & img{
      width: 100%;

    }
  }

`
const Todo = ({setCurrentTask,setComment}) => {
  const [work, setWork]=useState([]);
  
  
  useEffect(()=>{
    setComment(work)
  },[work])
  
  return (
    <TodoWarp>
      <Edit setWork={ setWork }></Edit>
      {/* <List Listdata={ work } delWork={ setWork }></List> */}
      <List Listdata={ work } delWork={ setWork } setCurrentTask={setCurrentTask}></List> 
      <Profile>
        <div className='item'>
          <div className='next'><a href="https://freddy10-github.github.io/"><img src="https://freddy10-github.github.io/images/F49D4857-4EDB-49C0-89A0-27F791BE7DE4.png" alt="" /></a></div>          
        </div>
        <div className='item'>
          <div className='next'><a href="https://github.com/Freddy10-github"><img src="https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo.png" alt="" /></a></div>          
        </div>
        <div className='item'>
          <div className='next'><a href="https://www.linkedin.com/in/freddy-lo/"><img src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png" alt="" /></a></div>          
        </div>
      </Profile>
    </TodoWarp>
  );
};

export default Todo;