import {createActions} from "../../lib/utils";

const constants = {}

constants.ADD_TODO = 'todo/ADD_TODO';
constants.COMPLETE_TODO = 'todo/COMPLETE_TODO';
constants.DELETE_TODO = 'todo/DELETE_TODO';
constants.EDIT_TODO = 'todo/EDIT_TODO';
constants.CLOSE_MODAL = 'todo/CLOSE_MODAL';

const addTodo = createActions(constants.ADD_TODO);
const completeTodo = createActions(constants.COMPLETE_TODO);
const deleteTodo = createActions(constants.DELETE_TODO);
const editTodo = createActions(constants.EDIT_TODO);
const closeModal = createActions(constants.CLOSE_MODAL);


export default constants


export const actions ={
    addTodo,
    completeTodo,
    deleteTodo,
    editTodo,
    closeModal
}