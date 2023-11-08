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
    if(isTimerOn) { 
      interval = setInterval(() => {
        setTime(prev => prev-1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    if(time === 0){ // 0이 그려지고 나서 뜨게하는 방법?
      alert('시간이 종료되었습니다!')
      clearInterval(interval);
      setIsTimerOn(false);
      setTime(10);
    }
    return () => clearInterval(interval);
  }, [isTimerOn, time]);

  return (
    <div>
      <p>0:{time}</p>
      <button onClick={() => handleToggle()}>{isTimerOn ? '정지' : '시작'}</button>
      <button onClick={() => handleReset()}>리셋</button>
    </div>
  );
}

export default Timer;
