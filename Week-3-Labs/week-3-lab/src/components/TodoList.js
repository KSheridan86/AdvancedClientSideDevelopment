import {useState} from 'react';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [id, setId] = useState(0);

    function handleInput(e) {
        e.preventDefault();
        setText(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setTodos(function(todos_arr) {
            setId(id + 1);
            return [...todos_arr, {id: id, text: text, isEdit:false}];
        });
    }
    return(
        <div>
            <input type="text" value={text} onChange={handleInput} />
            <button onClick={handleSubmit}>Add Todo</button>
            <ul>
                {todos.map(function(i, index) {
                    return (
                        <Todo todo={todos[index]} />
                    )
                })}
            </ul>
            
        </div>
    )
}

export default TodoList;