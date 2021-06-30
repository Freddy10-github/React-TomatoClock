/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import React from 'react';
import { useState } from 'react';
import { far } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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
    display: none;
    
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
  const [checked, setShecked] =useState(far.faCircle)
  const changeCheck = () =>{
    if(checked===far.faCircle)
      setShecked(far.faCheckCircle)
    else
      setShecked(far.faCircle)
  }
  const noteDone=()=>{
    delWork(function(prev){
      return prev.filter(item=>item.id !== id)      
    })
  }
  const noteChoose=()=>{
    setCurrentTask(note)
  }
  return (
    <ItemWrap><label onClick={ changeCheck} htmlFor=""><input type="checkbox"/><FontAwesomeIcon className='icon' icon={checked}/></label>
      <p className='context'>&ensp;{note}</p>
      <label htmlFor="input" id={id}></label>
      <ButtomBlock className='Btn'>
        <button id="OK" onClick={noteDone}>刪除</button>
        <button id="Del" onClick={noteChoose}>選擇</button>
      </ButtomBlock>
    </ItemWrap>
  );
};
export default Item;  
