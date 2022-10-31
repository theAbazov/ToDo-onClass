import React, { useState } from 'react';
import PropTypes from 'prop-types';

const NewTaskForm = ({ placeholder, title, addItem }) => {
  const [value, setValue] = useState('');
  const [min, setMin] = useState('');
  const [sec, setSec] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const timer = +min * 60 + +sec;
    console.log(timer);
    if (value.trim()) addItem(value, timer);
    setValue('');
    setMin('');
    setSec('');
  };

  const onSecValueChange = (event) => {
    const value = event.target.value;
    if (value < 0 || value > 59) return;
    setSec(value);
  };

  const onMinValueChange = (event) => {
    let value = event.target.value;
    console.log(value);
    if (value < 0 || value > 999) return;
    setMin(value);
  };

  return (
    <div className="header">
      <h1>{title}</h1>
      <form onSubmit={handleSubmit} className="new-todo-form">
        <label className="new-todo-w">
          <input
            className="new-todo"
            placeholder={placeholder}
            onChange={(event) => setValue(event.target.value)}
            value={value}
          />
        </label>

        <label className="new-todo-form__timer-label">
          <input
            className="new-todo-form__timer"
            onChange={onMinValueChange}
            type="number"
            min={0}
            placeholder={'MIN'}
            value={min}
            required
          />
        </label>
        <span>:</span>
        <label className="new-todo-form__timer-label">
          <input
            className="new-todo-form__timer"
            onChange={onSecValueChange}
            type="number"
            min={0}
            placeholder={'SEC'}
            value={sec}
            required
          />
        </label>
        <input type="submit" hidden />
      </form>
    </div>
  );
};

NewTaskForm.propTypes = {
  placeholder: PropTypes.string,
  title: PropTypes.string,
  addItem: PropTypes.func.isRequired,
};

NewTaskForm.defaultProps = {
  placeholder: 'What needs to be done?',
  title: 'Todos',
};

export default NewTaskForm;
