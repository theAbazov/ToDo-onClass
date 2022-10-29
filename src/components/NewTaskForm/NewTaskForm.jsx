import React from 'react';
import PropTypes from 'prop-types';

class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      min: null,
      sec: null,
    };
  }

  onMinValueChange = (event) => {
    let value = event.target.value;
    console.log(value);
    if (value < 0) return;
    this.setState({
      min: value,
    });
  };

  onSecValueChange = (event) => {
    const value = event.target.value;
    if (value < 0) return;
    this.setState({
      secValue: value,
    });
  };

  render() {
    const { placeholder, title, addItem } = this.props;
    const { value, min, sec } = this.state;
    const handleSubmit = (event) => {
      event.preventDefault();
      const timer = +min * 60 + +sec;
      console.log(timer);
      if (value.trim()) addItem(value, timer);
      this.setState({ value: '', min: '', sec: '' });
    };
    return (
      <div className="header">
        <h1>{title}</h1>
        <form onSubmit={handleSubmit} className="new-todo-form">
          <label className="new-todo-w">
            <input
              className="new-todo"
              placeholder={placeholder}
              onChange={(event) => this.setState({ value: event.target.value })}
              value={value}
            />
          </label>

          <label className="new-todo-form__timer-label">
            <input
              className="new-todo-form__timer"
              onChange={this.onMinValueChange}
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
              onChange={this.onSecValueChange}
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
  }
}

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
