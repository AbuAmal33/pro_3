import React from 'react';

function Todo(props) {
    return (
        <li>
            {props.todo.title}
        </li>
    );
}

export default Todo;