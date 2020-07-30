import React from 'react';


const TodoForm = props => {
    const { handleSubmit, changeNewTask, hideCompleted, value } = props

    return (
        <div className='todo-form-div'>
            <form onSubmit={changeNewTask}>
                <input type='text' onChange={changeNewTask} name='newTask' value={value} />
                <div className='button-div'>
                    <button onClick={handleSubmit}>Add To-do Item</button>
                    <button onClick={hideCompleted}>Clear Completed</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;