/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import ClockList from './Clock/ClockList';
import Countdown from './Clock/Countdown';
import { useState } from 'react';

const ClockWarp = styled.div`
  height: 100vh;
  width: 60%;
  background-color: #9F0050; 
  padding: 50px 15%;
  box-sizing: border-box;
  & .choose{
    display: none;
  }
`

const  CurrentTodo = styled.h1`
  text-align: center;
  font-size: xx-large;
  background-color: #ddd;
  padding:10px 0px 15px ;
  border-radius:30px;
  margin-bottom: .5em;
  box-sizing: border-box;
  &:hover{
    cursor: pointer;
  }


`

const Clock = ({even}) => {  
  const [title,setTitle] = useState('點擊選擇工作')
  return (
    <ClockWarp>
      
        <CurrentTodo><input type="radio" />{title}</CurrentTodo>
        <div className="choose">{     
            even.map(item => {
            const { id, note, } =item
            return <ClockList key={ id } id={ id } note ={note} setTitle={setTitle}/>
            })
            }
          </div>
        <Countdown></Countdown>
    </ClockWarp>
  );
};

export default Clock;