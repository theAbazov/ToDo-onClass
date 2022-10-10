import React from 'react';
import PropTypes from 'prop-types';

class NewTaskForm extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  render() {
    const { placeholder, title, addItem } = this.props;
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addItem(this.state.value);
          this.setState({ value: '' });
        }}
        className="header"
      >
        <h1>{title}</h1>
        <input
          className="new-todo"
          placeholder={placeholder}
          onChange={(event) => this.setState({ value: event.target.value })}
          value={this.state.value}
        />
      </form>
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
