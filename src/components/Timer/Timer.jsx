import React from 'react';

import PropTypes from 'prop-types';

class Timer extends React.Component {
  constructor() {
    super();
    this.interval = false;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentDidUpdate(prevProps) {
    const { timer } = this.props;
    if (timer !== prevProps.timer && timer === 0) this.stopTimer();
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  startTimer = () => {
    const { timer } = this.props;
    const { id, onSetTimer } = this.props;
    if (!this.interval && timer !== 0) {
      this.interval = setInterval(() => {
        const { timer: time } = this.props;
        onSetTimer(time - 1, id);
      }, 1000);
    }
  };

  stopTimer = () => {
    clearInterval(this.interval);
    this.interval = false;
  };

  render() {
    const { timer } = this.props;

    const formatTimer = (time) => {
      const minutes = `${Math.floor(time / 60)}`;
      const seconds = Math.floor(time % 60) < 10 ? `0${Math.floor(time % 60)}` : `${Math.floor(time % 60)}`;
      return `${minutes}:${seconds}`;
    };

    return (
      <>
        <button className="icon icon-play" type="button" aria-label="Start" title="Start" onClick={this.startTimer} />
        <button className="icon icon-pause" type="button" aria-label="Stop" title="Stop" onClick={this.stopTimer} />
        {formatTimer(timer)}
      </>
    );
  }
}

Timer.propTypes = {
  id: PropTypes.number.isRequired,
  timer: PropTypes.number.isRequired,
  onSetTimer: PropTypes.func.isRequired,
};

export default Timer;
