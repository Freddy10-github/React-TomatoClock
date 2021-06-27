/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import Countdown from './Clock/Countdown';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import Comment from './Clock/Comment';

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
`

const Clock = ({currentTask}) => {  
  return (
    <ClockWarp>      
        <CurrentTodo >{currentTask}</CurrentTodo>
        <Countdown></Countdown>
    </ClockWarp>
  );
};

export default Clock;
{/* <FontAwesomeIcon className='icon' icon={fas.faCheckCircle}/> */}