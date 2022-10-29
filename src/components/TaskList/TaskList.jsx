import React from 'react';
// import PropTypes from 'prop-types';

import { Task } from '../Task';

const TaskList = ({ todos, changeCheck, editItem, deleteItem, onSetTimer }) => {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <Task
          key={todo.id}
          changeCheck={changeCheck}
          editItem={editItem}
          deleteItem={deleteItem}
          todo={todo}
          onSetTimer={onSetTimer}
        />
      ))}
    </ul>
  );
};

export default TaskList;
