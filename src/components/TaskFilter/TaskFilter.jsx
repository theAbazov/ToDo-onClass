import React from 'react';
import PropTypes from 'prop-types';

class TaskFilter extends React.Component {
  render() {
    const { filter, changeFilter } = this.props;
    return (
      <ul className="filters">
        <li>
          <button type="button" onClick={() => changeFilter('All')} className={filter === 'All' ? 'selected' : null}>
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => changeFilter('Active')}
            className={filter === 'Active' ? 'selected' : null}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            onClick={() => changeFilter('Completed')}
            className={filter === 'Completed' ? 'selected' : null}
          >
            Completed
          </button>
        </li>
      </ul>
    );
  }
}

TaskFilter.propTypes = {
  filter: PropTypes.string,
  changeFilter: PropTypes.func.isRequired,
};

TaskFilter.defaultProps = {
  filter: 'All',
};
export default TaskFilter;
