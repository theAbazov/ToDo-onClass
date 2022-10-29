import React from 'react';
import PropTypes from 'prop-types';

import TaskFilter from '../TaskFilter/TaskFilter';

const Footer = ({ lefts, clearCompleted, changeFilter, filter }) => {
  return (
    <footer className="footer">
      <span className="todo-count">{lefts} items left</span>
      <TaskFilter filter={filter} changeFilter={changeFilter} />
      <button type="button" onClick={clearCompleted} className="clear-completed">
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  lefts: PropTypes.number,
  clearCompleted: PropTypes.func.isRequired,
  changeFilter: PropTypes.func.isRequired,
  filter: PropTypes.string,
};

Footer.defaultProps = {
  lefts: 0,
  filter: 'All',
};

export default Footer;
