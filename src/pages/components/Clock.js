/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Countdown from './Clock/Countdown';
import Comment from './Clock/Comment';

const ClockWarp = styled.div`
  height: 100vh;
  width: 60%;
  background-color: #9F0050; 
  padding: 50px 15%;
  box-sizing: border-box;
  
  & .choose{
    /* display: none; */
    position: sticky;
    background-color: #ccc;
    top: 0;
    width: 100%;
    z-index: 2;
  }
`

const  CurrentTodo = styled.h1`
  text-align: center;
  font-size: xx-large;
  background-color: #ddd;
  padding:10px 0px 15px ;
  border-radius:30px;

  box-sizing: border-box;
  &:hover{
    cursor: pointer;
  }


`

const Clock = ({currentTask}) => {  
  return (
    <ClockWarp>
      
        <CurrentTodo >{currentTask}</CurrentTodo>
        <Countdown></Countdown>
        <Comment> </Comment>
    </ClockWarp>
  );
};

export default Clock;