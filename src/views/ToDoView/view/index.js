import React, {useState} from 'react'
import Todo from "../../../components/ToDo";
import Modal from '../../../components/Modal'

const TodoView = ({todos, addTodo, editTodo, deleteTodo, completeTodo, showModal, closeModal}) => {


    const todosComponent = todos.map((todo) => {
        return <Todo editTodo={editTodo}
                     deleteTodo={deleteTodo}
                     completeTodo={completeTodo}
                     addTodo={addTodo}
                     key={todo.id}
                     dataTestId={'todo-'+todo.id}
                     todo={todo}/>
    });
    return (<div>
        <Modal
            className="modal"
            dataTestId={'success-modal'}
            show={showModal}
            close={closeModal}>
            Maybe aircrafts fly very high because they don't want to be seen in plane sight?
        </Modal>
        <div data-testId={'todos'}>{todosComponent}</div>
        <Todo dataTestId={'add-todo'} addTodo={addTodo} todo={{id: null, placeholder: 'add new todo'}}/>
    </div>)
}

export default TodoView