/** @jsxImportSource @emotion/react */  
import styled from '@emotion/styled'
import { useState, useEffect, useRef,  } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'

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
  margin:5em auto;
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
  justify-content: space-around;
  & .icon{
    width: 100%;
    height: 70%;
    border: 1px solid #ddd;
    padding: .3em 0;
  }
  
  & .icon:hover{
      
      cursor: pointer;
    }
`

const Countdown = () => {
  const [countdown,setCountdown] = useState('25 : 00')
  const [timeStatus,setTimeStatus] = useState('開始')
  const [time, setTime] = useState()
  const isTimerGoing = useRef(false)
  let interval =useRef()
  
  
  let workTime=0.5*60
  const startTimer = () =>{
    interval = setInterval(()=>{
      let realTime = new Date().getTime()
      let leastTime = workTime-(Math.round((realTime-time)/1000))
      let min = Math.floor(leastTime/60)
      let sec = leastTime % 60
      sec = sec < 10 ? '0' + sec : sec
      setCountdown(`${min} : ${sec}`)
      if(leastTime<0)
        clearInterval(interval.current)
    },1000)
  }
  
  
  useEffect(()=>{
    if(!isTimerGoing.current)
      return
    startTimer()
    return ()=>{
      clearInterval(interval.current)
    }
  })
  const startCount = () =>{
    setTime(new Date().getTime())
    isTimerGoing.current = isTimerGoing.current === false ? true : false
    console.log(isTimerGoing.current);
    setTimeStatus(()=>{
      return isTimerGoing.current = true ? '開始' : '暫停'
    })
    if (!isTimerGoing.current) {
      clearInterval(interval.current)
    }
  }
  return (
    <TimeCount><p>{countdown}</p>
      <Btn>
        <FontAwesomeIcon className='icon' icon={fas.faRedo}/>
        <FontAwesomeIcon className='icon' icon={fas.faPlay}/>
        <FontAwesomeIcon className='icon' icon={fas.faStepForward}/>
      </Btn>
    </TimeCount>

  );
};

export default Countdown;