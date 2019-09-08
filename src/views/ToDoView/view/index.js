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
                     todo={todo}/>
    });
    return (<div>
        <Modal
            className="modal"
            show={showModal}
            close={closeModal}>
            Maybe aircrafts fly very high because they don't want to be seen in plane sight?
        </Modal>
        {todosComponent}
        <Todo addTodo={addTodo} todo={{id: null, placeholder: 'add new'}}/>
    </div>)
}

export default TodoView