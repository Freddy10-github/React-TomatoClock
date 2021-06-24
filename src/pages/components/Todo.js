/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Edit from './Todo/Edit';
import Comment from './Todo/Comment';
import List from './Todo/List'
import { useState,useEffect } from 'react';

const TodoWarp = styled.div`
  
  height: 100vh;
  width: 40%;
  background-color: #272727;  
`
const Todo = ({setEven}) => {
  const [work, setWork]=useState([]);
  useEffect(()=>{
    setEven(work) 
},[]);
  return (
    <TodoWarp>
      <Edit setWork={ setWork }></Edit>
      <List Listdata={ work }></List>
      <Comment></Comment>
    </TodoWarp>
  );
};

export default Todo;