import React from 'react';
import PropTypes from 'prop-types';

class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      min: '',
      sec: '',
    };
  }

  onMinValueChange(event) {
    let value = event.target.value;
    if (value < 0 || value > 999) return;
    this.setState({
      min: value,
    });
  }

  onSecValueChange(event) {
    const value = event.target.value;
    if (value < 0 || value > 59) return;
    this.setState({
      sec: value,
    });
  }

  render() {
    const { placeholder, title, addItem } = this.props;
    const { value, min, sec } = this.state;
    const handleSubmit = (event) => {
      event.preventDefault();
      const timer = +min * 60 + +sec;
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
              onChange={this.onMinValueChange.bind(this)}
              type="number"
              min={0}
              placeholder={'Min'}
              value={min}
              required
            />
          </label>
          <span>:</span>
          <label className="new-todo-form__timer-label">
            <input
              className="new-todo-form__timer"
              onChange={this.onSecValueChange.bind(this)}
              type="number"
              min={0}
              placeholder={'Sec'}
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
