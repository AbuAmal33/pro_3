const initialState = {
    filter: "",
    selectedUserId: null,
    users: [],
    todos: [],

    loadingUsers: false,
    loadingTodos: false
}

export default (state= initialState, action) => {
    switch (action.type) {
        case 'users/load/start':
            return {
                ...state,
                loadingUsers: true
            }
        case 'users/load/success':
            return {
                ...state,
                users: action.payload,
                loadingUsers: false
            }

        case 'todos/load/start':
            return {
                ...state,
                loadingTodos: true
            }
        case 'todos/load/success':
            return {
                ...state,
                todos: action.payload,
                loadingTodos: false
            }


        default:
            return state;
    }
}