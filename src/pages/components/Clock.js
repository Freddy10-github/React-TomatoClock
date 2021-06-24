/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import ClockList from './Clock/ClockList';

const ClockWarp = styled.div`
  height: 100vh;
  width: 60%;
  background-color: #9F0050;  
`
const CurrentTodo = styled.div`
  width: 40%;
  font-size: 30px;
  font-weight: bold;
  border-radius: 50px;
  background-color: #ddd;
  margin:20px auto;
  text-align: center;
  
  min-height: 1.2em;
  overflow: hidden;
  

`

const Clock = ({even}) => {
  return (
    <ClockWarp>
      <CurrentTodo>
        
        {even.map(item =>{
          const { id, note } = item
          return <ClockList note ={note} />          
          }
        )}
        
        
      </CurrentTodo>
    </ClockWarp>
  );
};

export default Clock;