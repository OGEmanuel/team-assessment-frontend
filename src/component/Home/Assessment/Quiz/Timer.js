import { useState, useEffect } from 'react';

import clock from '../../../../assets/timer.svg';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(seconds + 1);

      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds, minutes]);

  return (
    <div className="flex justify-center pt-2 gap-[1.2rem] mb-2">
      <img src={clock} alt="" className="w-[1.6rem]" />
      <p className="text-4xl font-medium">
        TIMER:{minutes < 10 ? '0' + minutes : minutes}:
        {seconds < 10 ? '0' + seconds : seconds}
      </p>
    </div>
  );
};

export default Timer;
