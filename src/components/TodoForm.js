import React from 'react';


const TodoForm = props => {
    const { handleSubmit, stateNewTask, showCompleted } = props

    return (
        <div className='todo-form-div'>
            <form onSubmit={handleSubmit()}>
                <input type='text' />
                <div className='button-div'>
                    <button>Add To-do Item</button>
                    <button>Clear Completed</button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm;