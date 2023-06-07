import {useState} from 'react';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState('');
    const [updateText, setUpdateText] = useState('');
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

    function handleDelete(e, id) {
        e.preventDefault();
        setTodos(function(todos_arr) {
            return todos_arr.filter(function(todo) {
                return todo.id !== id;
            });
        });
    }

    function handleEdit(e, id) {
        e.preventDefault();
        var todos_arr = [...todos];
        var index = todos_arr.findIndex(function(todo) {
            return todo.id === id;
        });
        todos_arr[index].isEdit = true;
        setUpdateText(todos_arr[index].text);
        setTodos(todos_arr);
    }

    function handleUpdateText(e) {
        e.preventDefault();
        setUpdateText(e.target.value);
    }

    function handleUpdate(e, id) {
        e.preventDefault();
        var todos_arr = [...todos];
        var index = todos_arr.findIndex(function(todo) {
            return todo.id === id;
        });
        todos_arr[index].text = updateText;
        todos_arr[index].isEdit = false;
        setTodos(todos_arr);
    }

    return(
        <div>
            <input type="text" value={text} onChange={handleInput} />
            <button onClick={handleSubmit}>Add Todo</button>
            <ul>
                {todos.map(function(i, index) {
                    if (i.isEdit) {
                        return (
                            <li key={index}>
                                <Todo todo={todos[index]} 
                                handleUpdateText={handleUpdateText}
                                updateText={updateText} />
                                <button onClick={function(e){
                                    handleUpdate(e, i.id)
                                }}>Save</button>
                            </li>
                        )
                    } else {
                        return (
                            <li key={index}>
                                <Todo todo={todos[index]} 
                                handleUpdateText={handleUpdateText}
                                updateText={updateText} />
                                <button onClick={function(e) {
                                    handleDelete(e, i.id);
                                }}>Delete</button>
                                <button onClick={function(e) {
                                    handleEdit(e, i.id);
                                }}>Edit</button>
                            </li>
                        )
                    }
                })}
            </ul>
            
        </div>
    )
}

export default TodoList;