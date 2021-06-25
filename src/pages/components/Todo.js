/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Edit from './Todo/Edit';
import List from './Todo/List'
import { useState,useEffect } from 'react';

const TodoWarp = styled.div`
  height: 100vh;
  width: 40%;
  background-color: #272727;
`
const Window = styled.div`
  background-color: red;
  width: 80%;
  color: #ddd;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  text-align: center;
`
const Todo = ({setEven}) => {
  const [work, setWork]=useState([]);
  
  
    
  setEven(work) 
  
  return (
    <TodoWarp>
      <Edit setWork={ setWork }></Edit>
      {/* <List Listdata={ work } delWork={ setWork }></List> */}
      <List Listdata={ work } delWork={ setWork }></List> 
    </TodoWarp>
  );
};

export default Todo;