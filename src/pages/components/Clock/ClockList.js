/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'


const ClockItem =styled.div`
  
  & li{
    border-bottom: 1px solid #fff;
    width: 100%;
    
    color:#333;
    cursor: pointer;
    display: block;
    &:hover{
      background-color: #333;
      color: #ddd;
    }
    
    
  }
`


const ClockList = ({note,setTitle}) => {
  const choose = ()=>{
    setTitle(note)
  }
  return (
    <ClockItem>
      <li onClick={choose}>{note}</li> 
      
    </ClockItem>
  );
};

export default ClockList;