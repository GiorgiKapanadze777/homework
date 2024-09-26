import { useState, useEffect, useRef } from 'react';

const useCountdownTimer = (initialTime) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null);

  // Start the timer
  const startTimer = () => {
    if (!isRunning && timeLeft > 0) {
      setIsRunning(true);
    }
  };

  // Pause the timer
  const pauseTimer = () => {
    setIsRunning(false);
  };

  // Reset the timer
  const resetTimer = () => {
    setIsRunning(false);
    setTimeLeft(initialTime);
  };

  // Clear the interval when the component unmounts or when paused
  useEffect(() => {
    if (isRunning && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
      }, 1000);
    } else if (timeLeft === 0) {
      setIsRunning(false);
    }

    return () => clearInterval(intervalRef.current);
  }, [isRunning, timeLeft]);

  return { timeLeft, isRunning, startTimer, pauseTimer, resetTimer };
};

export default useCountdownTimer;
