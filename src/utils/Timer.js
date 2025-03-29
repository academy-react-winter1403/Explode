import { useState, useEffect } from 'react';

export const useTimer = (initialTime = 60) => {
  const [counter, setCounter] = useState(initialTime);
  const [isTimerActive, setIsTimerActive] = useState(false);

  useEffect(() => {
    let timer;
    if (isTimerActive && counter > 0) {
      timer = setTimeout(() => setCounter(counter - 1), 1000);
    } else if (counter === 0) {
      setIsTimerActive(false);
    }
    return () => clearTimeout(timer);
  }, [counter, isTimerActive]);

  const startTimer = () => {
    setIsTimerActive(true);
    setCounter(initialTime);
  };

  const stopTimer = () => {
    setIsTimerActive(false);
  };

  const resetTimer = () => {
    setCounter(initialTime);
  };

  return {
    counter,
    isTimerActive,
    startTimer,
    stopTimer,
    resetTimer,
  };
};
