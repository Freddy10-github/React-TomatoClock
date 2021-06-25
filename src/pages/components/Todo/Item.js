/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import React from 'react';

const ItemWrap = styled.div`
  border: 1px dotted #333;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 2px 5px;
  & p{
    overflow-x:hidden;
    width: 80%;
  }
`
const ButtomBlock=styled.div`
  width: 20%;
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


const Item = ({ id,note,delWork}) => {
  const noteDone=()=>{
    delWork(function(prev){
      return prev.filter(item=>item.id !== id)      
    })
  }
  const noteDel=()=>{
    console.log(456);
  }
  return (
    <ItemWrap>
      <p>{note}</p>
      <ButtomBlock>
        <button id="OK" onClick={noteDone}>完成</button>
        <button id="Del" onClick={noteDel}>刪除</button>
      </ButtomBlock>
    </ItemWrap>
  );
};

export default Item;