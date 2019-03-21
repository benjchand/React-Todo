import React from 'react';
import ToDoForm from './components/TodoComponents/TodoForm.js';
import ToDoList from './components/TodoComponents/TodoList.js';
import "./components/TodoComponents/Todo.css";

    
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state

const theWholeList = [
  {
    task: '- Add new tasks below',
    id: 1553117627110,
    completed: false,
  },
  {
    task: '- Click on an item to mark it complete',
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
    const newToDo = {task: '-    '+this.state.toDoItem, id: Date.now(), completed: false};
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
      
      <div className="to-Do-Wrapper">
        <h2>MY TO-DO LIST:</h2>
        <div className="to-Do-List-Div">
        <ToDoList
          toDoListArrayBeingReferenced= {this.state.toDoList}
          toggleItemFromApp = {this.toggleItemFunction}
        />
        </div>
        <div className="to-Do-Form-Div"><ToDoForm 
          value={this.state.toDoItem}
          changeToDoItemForm={this.changeToDoItemFunction}
          addToDoListForm = {this.addToDoItemFunction}
          clearCompletedTasksForm = {this.clearCompletedTasksFunction}
        />
        </div>
      </div>
    );
  }
}

export default App;
