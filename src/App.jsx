import React, { useState } from 'react';

import './App.css';
import { Footer } from './components/Footer';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskList } from './components/TaskList';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('All');

  const addItem = (value, timer) => {
    const data = {
      id: todos.length + 1,
      body: value,
      checked: false,
      date: new Date(),
      timer,
    };
    setTodos((todos) => [...todos, data]);
  };

  const deleteItem = (ident) => {
    setTodos((todos) => todos.filter(({ id }) => id !== ident));
  };

  const changeCheck = (id, data) => {
    setTodos((todos) => {
      return todos.map((element) => {
        if (id === element.id) element.checked = data;
        return element;
      });
    });
  };

  const editItem = (id, text) => {
    setTodos((todos) => {
      return todos.map((element) => {
        if (element.id === id) element.body = text;
        return element;
      });
    });
  };

  const filteredItems = () => {
    const all = filter === 'All';
    const completed = filter === 'Completed';
    return todos.filter(({ checked }) => (all ? true : completed ? checked === true : checked === false));
  };

  const clearCompleted = () => {
    setTodos((todos) => todos.filter((element) => !element.checked));
  };

  const changeFilter = (data) => {
    setFilter(data);
  };

  const onSetTimer = (newTime, id) => {
    setTodos((todos) =>
      todos.map((todo) => {
        if (todo.id === id) todo.timer = newTime;
        return todo;
      })
    );
  };

  return (
    <div className="todoapp">
      <NewTaskForm title="Todos" placeholder="What needs to be done?" addItem={addItem} />
      <TaskList
        changeCheck={changeCheck}
        editItem={editItem}
        deleteItem={deleteItem}
        todos={filteredItems()}
        onSetTimer={onSetTimer}
      />
      <Footer
        changeFilter={changeFilter}
        clearCompleted={clearCompleted}
        lefts={todos.filter(({ checked }) => !checked).length}
        filter={filter}
      />
    </div>
  );
};

export default App;
