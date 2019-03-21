import React from 'react';

const ToDo = props => {
    return (
        <div className={`task${props.item.completed ? " completed" : ""}`} onClick = {() => props.toggleItem(props.item.id)}>
            {props.toDoItemBeingLookedUp.task}
        </div>
    )
}

export default ToDo;