import React from 'react';

const ToDoForm = props => {
    return (
        <form>
            <input 
                value={props.value}
                onChange={props.changeToDoItemForm}
            
            />



            <button onClick={props.addToDoListForm}> Add To-Do Item</button>
            <button> Clear Completed Items</button>
        </form>
    )
}

export default ToDoForm;