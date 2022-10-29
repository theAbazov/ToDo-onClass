import React, { useEffect, useState } from 'react';

const Timer = ({ id, timer, onSetTimer }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    let interval;
    if (timer > 0 && active) {
      interval = setInterval(() => onSetTimer(timer - 1, id), 1000);
    } else clearInterval(interval);

    return () => clearInterval(interval);
  }, [timer, active]);

  useEffect(() => startTimer(), []);

  useEffect(() => () => stopTimer(), []);

  const stopTimer = () => {
    setActive(false);
  };

  const startTimer = () => {
    setActive(true);
  };

  const formatTimer = (time) => {
    const minutes = `${Math.floor(time / 60)}`;
    const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : `${Math.floor(time % 60)}`;
    return `${minutes}:${seconds}`;
  };
  return (
    <>
      <button className="icon icon-play" type="button" aria-label="Start" title="Start" onClick={startTimer} />
      <button className="icon icon-pause" type="button" aria-label="Stop" title="Stop" onClick={stopTimer} />
      {formatTimer(timer)}
    </>
  );
};

export default Timer;
