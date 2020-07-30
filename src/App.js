import React from 'react';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super()
    this.state = {
      todoList: [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: true
      },
      {
        task: 'Empty Garage',
        id: 1528817077287,
        completed: false
      }],
      newTask: '',
      hideCompleted: true
    }
  }

  handleSubmit = (nameOfTask) => {
    const timeToId = Date.now();
    const newTodoItem = {
      task: nameOfTask,
      id: timeToId,
      completed: false
    }
    this.state.todoList.push(newTodoItem)
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} hideCompleted={this.state.hideCompleted} />
        <TodoForm handleSubmit={this.handleSubmit} stateNewTask={this.state.newTask} hideCompleted={this.state.hideCompleted} />
      </div>
    );
  }
}

export default App;
