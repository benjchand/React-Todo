import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm.js';
import ToDoList from './components/TodoComponents/TodoList.js';

// import ToDoList from './components/TodoComponents/TodoList.js';
    
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

const theWholeList = [
  {
    task: 'Learn React',
    id: 1553117627110,
    completed: false,
  },
  {
    task: 'Make a To-Do List',
    id: 1553117679511,
    completed: false,
  }
];



class App extends React.Component {
  constructor(){
    super();

    this.state = {
      toDoList: theWholeList,
      toDoItem: '',
    };

  };

  addToDoItemFunction = event => {
    event.preventDefault();
    const newToDo = {task: this.state.toDoItem, id: Date.now(), completed: false};
    this.setState({
      toDoList: [...this.state.toDoList, newToDo],
      toDoItem: ''
    })
  }

  changeToDoItemFunction = event => {
    this.setState({
      toDoItem: event.target.value
    })

  }



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
        <ToDoList
          toDoListArrayBeingReferenced= {this.state.toDoList}
        />
        </div>
        <ToDoForm 
          value={this.state.toDoItem}
          changeToDoItemForm={this.changeToDoItemFunction}
          addToDoListForm = {this.addToDoItemFunction}
        />
      </div>
    );
  }
}

export default App;
