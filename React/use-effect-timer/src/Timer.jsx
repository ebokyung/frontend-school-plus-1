import React, { useEffect, useState } from "react";
function Timer() {
  const [time, setTime] = useState(10);
  const [isTimerOn, setIsTimerOn] = useState(false);

  const handleToggle = () => {
    setIsTimerOn(prev => !prev);
  }

  const handleReset = () => {
    setIsTimerOn(false);
    setTime(10);
  }
  
  useEffect(() => {
    let interval;
    if(isTimerOn && time > 0) { 
      interval = setInterval(() => {
        setTime(prev => prev-1);
      }, 1000);
    } else if(!isTimerOn && time !== 0 && interval){
      clearInterval(interval);
    }
    if(time === 0){
      alert('시간이 종료되었습니다!')
      clearInterval(interval);
      handleReset();
    }
    return () => {
      if(interval) clearInterval(interval);
    }
  }, [isTimerOn, time]);

  const formatTime = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  return (
    <div>
      <p>{formatTime()}</p>
      <button onClick={() => handleToggle()}>{isTimerOn ? '정지' : '시작'}</button>
      <button onClick={() => handleReset()}>리셋</button>
    </div>
  );
}

export default Timer;
