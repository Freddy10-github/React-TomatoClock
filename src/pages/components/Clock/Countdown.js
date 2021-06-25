/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import { useState,useEffect } from 'react';

  const TimeCount = styled.div`
  width: 100%;
  border: 2px solid #ddd;
  padding:10px 0px ;
  color: #ddd;
  border-radius:30px;
  text-align: center;
  font-size: xx-large;
`


const Countdown = () => {
  const ttt=true;
  const [countdown,setCountdown] = useState('')
  const timeCount = 0.5;
  var time = timeCount*60;
  var timeId
  
  const updatetime = () =>{
    let min = Math.floor(time/60);
    let sec = time % 60 ;
    sec = sec < 10 ? '0'+sec:sec;
    setCountdown(`${min} : ${sec}`)
    time -- ; 
    if(time == -1){
      clearInterval(timeId)
      
    }  
  }
  useEffect(()=>{
    timeId = setInterval(() => updatetime(), 1000);

  },ttt)
  return (
    <TimeCount>
      {countdown}
    </TimeCount>
  );
};

export default Countdown;