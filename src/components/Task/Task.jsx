import React, { useState } from 'react';
import { formatDistanceToNow } from 'date-fns';
import KG from 'date-fns/locale/en-AU';
import PropTypes from 'prop-types';

import Timer from '../Timer/Timer';

const Task = ({ changeCheck, todo, deleteItem, onSetTimer, editItem }) => {
  const [editing, setEditing] = useState(false);
  const [value, setValue] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    editItem(id, value);
    setValue('');
    setEditing(false);
  };

  const handleEditing = () => {
    setEditing(true);
    setValue(todo.body);
  };

  const { body, id, checked, date, timer } = todo;
  return (
    <li className={checked ? 'completed' : editing ? 'editing' : null}>
      <div className="view">
        <input
          id={id}
          className="toggle"
          type="checkbox"
          onChange={(event) => changeCheck(id, event.target.checked)}
          checked={checked}
        />
        <label htmlFor={id}>
          <span className="title">{body}</span>
          <span className="descriptions">
            <Timer id={id} timer={timer} onSetTimer={onSetTimer} />
          </span>
          <span className="description created">
            {`created ${formatDistanceToNow(date, {
              includeSeconds: true,
              locale: KG,
              addSuffix: true,
            })}`}
          </span>
        </label>
        <button type="button" onClick={handleEditing} className="icon icon-edit" />
        <button type="button" onClick={() => deleteItem(id)} className="icon icon-destroy" />
      </div>
      {editing && (
        <form onSubmit={handleSubmit}>
          <input
            autoFocus
            onChange={(event) => setValue(event.target.value)}
            type="text"
            className="edit"
            value={value}
          />
        </form>
      )}
    </li>
  );
};

Task.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    body: PropTypes.string,
    checked: PropTypes.bool,
    date: PropTypes.instanceOf(Date),
  }),
  deleteItem: PropTypes.func.isRequired,
  changeCheck: PropTypes.func.isRequired,
  editItem: PropTypes.func.isRequired,
};

Task.defaultProps = {
  todo: {},
};

export default Task;
