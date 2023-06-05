import {useState} from 'react';

function Todo(props) {
    console.log(props.todo.text)
    return(
        <div>{props.todo.text}</div>
    )
}

export default Todo;