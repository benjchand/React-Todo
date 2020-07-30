import React from 'react';
import './Todo.css';

const TodoItem = props => {
    const { todoTask, todoID, todoCompleted } = props;


    return (
        <div className='todo-main-div'>
            <h2 className='todo-task'>{todoTask}</h2>
            <input className='todo-checkbox' type='checkbox' checked={todoCompleted} />
        </div>
    )
}

export default TodoItem;