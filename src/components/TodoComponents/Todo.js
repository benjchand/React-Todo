import React from 'react';

const ToDo = props => {
    return (
        <div>
            {props.toDoItemBeingLookedUp.task}
        </div>
    )
}

export default ToDo;