import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm.js';
import ToDoList from './components/TodoComponents/TodoList.js';
import "./components/TodoComponents/Todo.css";

    
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

  changeToDoItemFunction = event => {
    this.setState({
      toDoItem: event.target.value
    })
  }

  addToDoItemFunction = event => {
    event.preventDefault();
    const newToDo = {task: this.state.toDoItem, id: Date.now(), completed: false};
    this.setState({
      toDoList: [...this.state.toDoList, newToDo],
      toDoItem: ''
    })
    console.log (this.state.toDoList)

  }

  clearCompletedTasksFunction = event => {
    event.preventDefault();
    const newFilteredTasks = this.state.toDoList.filter(taskBeingLookedAt => taskBeingLookedAt.completed === false)
    this.setState({
      toDoList: newFilteredTasks,
      toDoItem: ''
    })
    console.log (this.state.toDoList)

  }

  toggleItemFunction = clickedId => {
    // console.log(clickedId)
    this.setState({
      toDoList: this.state.toDoList.map(currentItem =>{
        if(currentItem.id === clickedId) {
          return{
            ...currentItem,
            completed: !currentItem.completed
          };

        }
          return currentItem;
      })
    })
    console.log (this.state.toDoList)
  };



  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <div>
        <ToDoList
          toDoListArrayBeingReferenced= {this.state.toDoList}
          toggleItemFromApp = {this.toggleItemFunction}
        />
        </div>
        <ToDoForm 
          value={this.state.toDoItem}
          changeToDoItemForm={this.changeToDoItemFunction}
          addToDoListForm = {this.addToDoItemFunction}
          clearCompletedTasksForm = {this.clearCompletedTasksFunction}
        />
      </div>
    );
  }
}

export default App;
