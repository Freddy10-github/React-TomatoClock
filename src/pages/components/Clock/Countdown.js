/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import { useState, useEffect, useRef,  } from 'react';

const TimeCount = styled.div`
  width: 100%;
  border: 2px solid #ddd;
  padding:10px 0px 0px ;
  color: #ddd;
  border-radius:30px;
  text-align: center;
  font-size: xx-large;
  overflow: hidden;
  height:4em;
  & p{
    height: 2em;
    display: block;
    line-height: 2em;
  }
`
const Btn = styled.div`
  width: 100%;
  height: 2em;  
  display: flex;
  border-top: 1px solid #ddd;
  & button{
    width: 80%;
    height: 100%;
    padding: 20px 0;
    background-color: #9F0050;
    border: none;
    color: #ddd;
    font-weight: bolder;  
      
  }
  & button:hover{
      background-color:	#820041;
      cursor: pointer;
    }
`

const Countdown = () => {
  const [countdown,setCountdown] = useState('25 : 00')
  const [timeStatus,setTimeStatus] = useState('開始')
  const isTimeGoing = useRef(false)

  function startCount (){
    console.log(123);
    isTimeGoing.current=!isTimeGoing.current
    console.log(isTimeGoing.current);
    setTimeStatus(()=>(isTimeGoing.current = true ? '暫停':'開始'))
    // const  timeID = setInterval(() => {
    //   updatetime(timeID);
    //   }, 1000);   
  } 
  
  let timeCount = 25;
  let time = timeCount*60;
  
  
  const updatetime = (timeID) =>{
    let min = Math.floor(time/60);
    let sec = time % 60 ;
    sec = sec < 10 ? '0'+sec:sec;
    setCountdown(`${min} : ${sec}`)
    time -- ;  
    if(time<0)
      clearInterval(timeID) 
  }
  useEffect(()=>{
    if(!isTimeGoing.current)
      return
    const  timeID = setInterval(() => {
      updatetime(timeID);
      }, 1000);
    
  },[timeStatus])
  
  

  return (
    
    <TimeCount><p>{countdown}</p>
      <Btn>
      
        <button onClick = {startCount}>{timeStatus}</button>
        <button >完成</button>
      </Btn>
    </TimeCount>
  );
};

export default Countdown;