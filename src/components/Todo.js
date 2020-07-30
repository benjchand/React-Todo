import React from 'react';
import './Todo.css';

const TodoItem = props => {
    const { todoTask, todoID, todoCompleted, toggleTodoComplete } = props;


    return (
        <div className='todo-main-div'>
            <h2 className='todo-task' style={todoCompleted ? { textDecoration: 'line-through' } : null}>{todoTask}</h2>
            <input className='todo-checkbox' type='checkbox' checked={todoCompleted} onClick={() => toggleTodoComplete(todoID)} />
        </div>
    )
}

export default TodoItem;