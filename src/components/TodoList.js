import React from 'react';
import Todo from './Todo';
// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

const TodoList = props => {

    return (
        <div>
            <h3>This is the TodoList</h3>
            {props.todoList.map(itemFromStateBeingExamined => (
                <Todo
                    todoTask={itemFromStateBeingExamined.task}
                    todoID={itemFromStateBeingExamined.id}
                    todoCompleted={itemFromStateBeingExamined.completed}
                />
            ))}
        </div>
    )
}

export default TodoList;