/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import React from 'react';

const ItemWrap = styled.div`
  border: 1px dotted #333;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
  padding: 2px 5px;
  & p{
    overflow-x:hidden;
    width: 80%;
  }
  & input{
    margin: .2em 1em;
    &:checked  + label{
      display: none;
    }
  }
`
const ButtomBlock=styled.div`
  width: 30%;
  text-align: right;
  
  & button{
    margin: 0px 3px;
    padding: 0 3px;
    border-radius: 20px;
    font-weight: bold;
    border-color: #000;
    cursor: pointer;
    
  }
  & #OK{
      background-color: #444;
      color: #ddd;
      
    }
  & #Del{
    background-color: #FF0080;
    color:#000;
  }
`


const Item = ({ id,note,delWork,setCurrentTask}) => {
  const noteDone=()=>{
    delWork(function(prev){
      return prev.filter(item=>item.id !== id)      
    })
  }
  const noteChoose=()=>{
    setCurrentTask(note)
  }
  return (
    <ItemWrap><input type="checkbox"/>
      <p>{note}</p>
      <label htmlFor="input" id={id}></label>
      <ButtomBlock className='Btn'>
        <button id="OK" onClick={noteDone}>刪除</button>
        <button id="Del" onClick={noteChoose}>選擇</button>
      </ButtomBlock>
    </ItemWrap>
  );
};
export default Item;  
