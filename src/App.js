import React from 'react';
import TodoList from './components/TodoList';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      toDoList: [{
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
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  // I am changing this to see what happens.

  constructor() {
    super()
    this.state = {
      todoList: [{
        task: 'Organize Garage',
        id: 1528817077286,
        completed: false
      }]
    }
  }
  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} />
      </div>
    );
  }
}

export default App;
