/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import { useState } from 'react';
import { v4  } from 'uuid';



const EditWrap = styled.div`
  padding:20px 0px;
  width: 88%;
  text-align: center;
  position: relative;
  margin: auto;
  & input{
    width: 80%;
    font-size: x-large;
    border-radius: 50px;
    box-sizing: border-box;
    padding: 10px 20px;
    &:focus{
      outline: none;
    }
    @media screen and (max-width: 700px) {
    width: 60%;    
    
}
  }
  & button{
    width: 50px;
    height: 50px;
    font-weight: bold;
    border-radius: 50%;
    margin: auto 5px;
    background-color:  #272727;
    border: 3px solid #ccc;
    color: #ccc;
  }    
  
  
`

const Edit = ({ setWork }) => {
  const [note,setNote] = useState("")
  const noteChange = (e) =>{
    setNote(e.target.value)
  }


  const addWork = (e) => {
    setWork(function(prevData){
      return [{
        id:v4(),
        note, },...prevData]
    })
    setNote(e.target.value="")
  }
  const handleKeyDown = (even) =>{
    if(even.key === 'Enter'){
      addWork(even)
    }
      
  }
  return (
    <EditWrap>
      <input type="text" value={ note } onChange={ noteChange } onKeyDown={ handleKeyDown } placeholder='Give me a task' />
      <button onClick={ addWork } >Add</button>
    </EditWrap>
  );
};

export default Edit;