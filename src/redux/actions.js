export const loadUsers = () => {
    return dispatch => {
        dispatch({ type: 'users/load/start'});

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'users/load/success',
                    payload: json
                });
            });
    }
}

export const loadTodos = () => {
    return dispatch => {
        dispatch({ type: 'todos/load/start'});

        fetch("https://jsonplaceholder.typicode.com/todos")
            .then(response => response.json())
            .then(json => {
                dispatch({
                    type: 'todos/load/success',
                    payload: json
                });
            });
    }
}

