import React from 'react';

const ToDoForm = props => {
    return (
        <form>
            <input 
                value={props.value}
                onChange={props.changeToDoItemForm}
                placeholder='Add A New Item'
            
            />
            



            <button onClick={props.addToDoListForm}> Add Item</button>
            <button onClick={props.clearCompletedTasksForm}> Clear Completed</button>
        </form>
    )
}

export default ToDoForm;