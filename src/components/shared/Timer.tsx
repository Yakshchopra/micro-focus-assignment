import React, { useEffect, useState } from 'react';

const Timer = () => {
  const [timer, setTimer] = useState('');

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setTimer(date.toLocaleTimeString());
    }, 1000);
  }, []);

  return <span className='text-lg font-mono'>{timer}</span>;
};

export default Timer;
