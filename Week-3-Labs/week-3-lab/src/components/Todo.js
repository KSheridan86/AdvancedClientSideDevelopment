// import {useState} from 'react';

function Todo(props) {
    if (props.todo.isEdit) {
        return (
            <span>
                <input type="text" value={props.updateText} onChange={props.handleUpdateText} />
            </span>
        )
    } else {
        return(
            <span>{props.todo.text}</span>
        )
    }

}

export default Todo;