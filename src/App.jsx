import React, { Component } from 'react';

import './App.css';
import { Footer } from './components/Footer';
import { NewTaskForm } from './components/NewTaskForm';
import { TaskList } from './components/TaskList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
      filter: 'All',
    };
  }

  addItem(value, timer) {
    let todos = this.state.todos;
    const data = {
      id: this.state.todos.length + 1,
      body: value,
      checked: false,
      date: new Date(),
      timer,
    };
    todos = [...todos, data];
    this.setState({ todos });
  }

  deleteItem(ident) {
    let todos = this.state.todos;
    todos = todos.filter(({ id }) => id !== ident);
    this.setState({ todos });
  }

  changeCheck(ident, data) {
    let todos = this.state.todos;
    todos = todos.map((element) => {
      if (ident === element.id) element.checked = data;
      return element;
    });
    this.setState({ todos });
  }

  editItem(ident, text) {
    let todos = this.state.todos;
    todos = todos.map((element) => {
      if (element.id === ident) element.body = text;
      return element;
    });
    this.setState({ todos });
  }

  filteredItems() {
    const { todos, filter } = this.state;
    return todos.filter(({ checked }) => {
      const all = filter === 'All';
      const completed = filter === 'Completed';
      return all ? true : completed ? checked === true : checked === false;
    });
  }

  clearCompleted() {
    let todos = this.state.todos;
    todos = todos.filter((element) => !element.checked);
    this.setState({ todos });
  }

  changeFilter(data) {
    this.setState({ filter: data });
  }

  onSetTimer(newTime, id) {
    let todos = this.state.todos;
    todos = todos.map((todo) => {
      if (todo.id === id) todo.timer = newTime;
      return todo;
    });
    this.setState({ todos });
  }

  render() {
    return (
      <div className="todoapp">
        <NewTaskForm title="Todos" placeholder="What needs to be done?" addItem={this.addItem.bind(this)} />
        <TaskList
          changeCheck={this.changeCheck.bind(this)}
          editItem={this.editItem.bind(this)}
          deleteItem={this.deleteItem.bind(this)}
          todos={this.filteredItems()}
          onSetTimer={this.onSetTimer.bind(this)}
        />
        <Footer
          changeFilter={this.changeFilter.bind(this)}
          clearCompleted={this.clearCompleted.bind(this)}
          lefts={this.state.todos.filter(({ checked }) => !checked).length}
          filter={this.state.filter}
        />
      </div>
    );
  }
}

export default App;
