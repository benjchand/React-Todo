import React from 'react';

const TodoItem = props => {
    const { todoTask, todoID, todoCompleted } = props
    return (
        <div>
            <h2>{todoTask}</h2>
        </div>
    )
}

export default TodoItem;