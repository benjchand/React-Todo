import React from 'react';
import ToDo from './Todo.js';



const ToDoList = props => {
    return(
        <div>
            {props.toDoListArrayBeingReferenced.map(itemFromArrayBeingExamined => (
              <ToDo
                key = {itemFromArrayBeingExamined.id}
                toDoItemBeingLookedUp = {itemFromArrayBeingExamined}
              />
            ))}
        </div>
    )
}


export default ToDoList;


