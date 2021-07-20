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
  margin-top:5em;
  @media screen and (max-width: 800px) {
    margin-top:.2em;
}
  & p{
    height: 2em;
    display: block;
    line-height: 2em;
  }`
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
    transition: all .2s
  }
  
  & .icon:hover{
      color: #333;
      cursor: pointer;
    }
`

const Countdown = () => {
  const timer = useRef(25)
  const [countdown,setCountdown] = useState(`${timer.current} : 00`)
  const [countstart,setCountStart] = useState(fas.faPlay )
  const leastTime = useRef()
  const [time, setTime] = useState()
  const [workTime,setWorkTime] = useState(timer.current*60)
  const isTimerGoing = useRef(false)
  var interval


  function init (){                             //Timer 初始化
    setCountdown(`${timer.current} : 00`)       
    setCountStart(fas.faPlay )
    isTimerGoing.current=false
    clearInterval(interval)
    setWorkTime(timer.current*60)
  }

  const startTimer = () =>{         //設定Timer
    interval = setInterval(()=>{
      
      let realTime = new Date().getTime()
      leastTime.current=workTime-(Math.round((realTime-time)/1000))
      let min = Math.floor(leastTime.current/60)
      let sec = leastTime.current % 60
      sec = sec < 10 ? '0' + sec : sec
      setCountdown(`${min} : ${sec}`)
      if(leastTime.current<1){        
        clearInterval(interval)       //計時結束並切換
        workChange()
      }
    },1000)
  }
  

  useEffect(()=>{   //防止畫面重複渲染
    if(!isTimerGoing.current)  
      return
    startTimer()
    return ()=>{
      clearInterval(interval)
    }
  },[countstart])

  const workStart = () =>{    //
    setTime(new Date().getTime())
    if (isTimerGoing.current)
      {clearInterval(interval)
        setWorkTime(leastTime.current)}
    isTimerGoing.current = isTimerGoing.current === false ? true : false
    setCountStart(isTimerGoing.current === false ? fas.faPlay : fas.faPause)       
  }

  
  const workReset = () =>{
    init()
  }
  const workChange = () =>{
    if(timer.current === 25) timer.current = 5
      else timer.current = 25
    init()
  }
  return (
    <TimeCount>
      <p>{countdown}</p>
      <Btn>
        <FontAwesomeIcon onClick={ workReset } className='icon' icon={fas.faRedo}/>
        <FontAwesomeIcon onClick={ workStart } className='icon' icon={countstart}/>
        <FontAwesomeIcon onClick={ workChange }className='icon' icon={fas.faStepForward}/>
      </Btn>
    </TimeCount>

  );
};

export default Countdown;