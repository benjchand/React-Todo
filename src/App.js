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

  handleSubmit = e => {
    e.preventDefault();
    const newTodo = { task: this.state.newTask, id: Date.now(), completed: false };
    this.setState({
      todoList: [...this.state.todoList, newTodo],
      newTask: '',
    })
    console.log(e);
    console.log(e.target);
  }

  changeNewTask = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  toggleTodoComplete = id => {
    let todos = this.state.todoList.slice();
    todos = todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
        return todo;
      } else {
        return todo;
      }
    });
    this.setState({ todos });
  };

  hideCompleted = e => {
    e.preventDefault();
    let todos = this.state.todoList.filter(item => !item.completed);
    console.log(todos)
    this.setState({ todoList: todos })
  }


  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList todoList={this.state.todoList} toggleTodoComplete={this.toggleTodoComplete} />
        <TodoForm
          value={this.state.newTask}
          handleSubmit={this.handleSubmit}
          changeNewTask={this.changeNewTask}
          hideCompleted={this.hideCompleted} />
      </div>
    );
  }
}

export default App;
