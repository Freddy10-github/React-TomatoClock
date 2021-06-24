/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'

const ClockItem =styled.div`
  
  & label{
    border-bottom: 1px solid #fff;
    width: 100%;
    
    color:#333;
    cursor: pointer;
    display: block;
    &:hover{
      background-color: #333;
      color: #ddd;
    }
    & input{
      display: none;
    }
  }
`


const ClockList = (note) => {
  return (
    <ClockItem>
      <label ><input type="radio" name='list' />{note.note}</label> 
      
    </ClockItem>
  );
};

export default ClockList;