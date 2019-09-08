import constants from '../actions/ToDoActions'

let todoIds = 0

const initialState = {
    todos: [],
    showModal:false
}

const Reducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case constants.ADD_TODO:
            return {...state, todos: [...state.todos, {...payload, id: todoIds++}]}
        case constants.EDIT_TODO:
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === payload.id) {
                        return payload
                    }
                    return todo
                })
            };
        case constants.DELETE_TODO:
            return {
                ...state, todos: state.todos.filter(todo => todo.id !== payload)
            };
        case constants.COMPLETE_TODO:
            let showModal = false
            if(payload.completed){
                const completedTasks = state.todos.filter(todo=>todo.completed)
                if((completedTasks.length+1)%3 === 0){
                    showModal = true
                }
            }
            return {
                ...state, todos: state.todos.map(todo => {
                    if (todo.id === payload.id) {
                        return payload
                    }
                    return todo
                }),
                showModal
            };
        case constants.CLOSE_MODAL:
            return {...state, showModal:false}
        default:
            return state

    }
}

export default Reducer



