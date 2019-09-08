import React, {useState, useEffect} from 'react'
import className from 'classnames'
import moment from 'moment'
import injectSheet from 'react-jss'
import {ToDosStyle} from "../../assets/jss/ToDos";
import CustomInput from '../CustomInputs/TextField'
import CustomCheckbox from "../CustomInputs/CheckBox";
import CustomDate from "../CustomInputs/Date";
import {FaTrash} from 'react-icons/fa';

const Todo = (props) => {

    const {classes, deleteTodo, editTodo, addTodo, completeTodo, todo} = props;
    const {dueDate, placeholder, content, id, completed} = todo;

    const [newTodo, setNewTodo] = useState(todo)

    useEffect(() => {
        setNewTodo(todo)
    }, [todo])
    console.log('newTodo', newTodo)
    // const showDate = (id == null && focus || id != null && focus || (id != null && dueDate));
    const inputContainerClasses = className({
        [classes.inputContainer]: true,
        [classes.inputContainerCompleted]: completed
    });

    const onChange = ({target: {name, value}}) => {
        if (id != null) {
            editTodo({...todo, [name]: value})
        } else {
            setNewTodo({...newTodo, [name]: value})
        }
    };
    const onComplete = ({target: {name, value}}) =>{
        completeTodo({...todo, [name]: value})
    }

    const addNewTodo = () => {
        if (id == null && newTodo.content) {
            addTodo(newTodo)
        }
    };
    const addNewDueDate = () => {
        if (!newTodo.completed)
            onChange({target: {name: 'dueDate', value: moment().format('YYYY-MM-DD')}})
    };

    const addNewDueDateComponent = <span style={newTodo.completed?{cursor:'auto'}:{}}
                                         className={classes.newDueDateComponent}
                                         onClick={addNewDueDate}>Add due date</span>;


    //In case there isn't any due date, show him text to add one
    const dateComponent = (!newTodo.dueDate ?
        addNewDueDateComponent
        :
        <CustomDate value={newTodo.dueDate}
                    disabled={completed}
                    name={'dueDate'}
                    onChange={onChange}/>);

    return <div className={classes.todo} onBlur={addNewTodo}>
        {id != null && <CustomCheckbox value={newTodo.completed} name={'completed'} onChange={onComplete}/>}
        {id != null && <div className={classes.lineSeparator}/>}
        <div className={inputContainerClasses}>
            <CustomInput value={newTodo.content}
                         disabled={completed}
                         name={'content'}
                         placeholder={placeholder}
                         onChange={onChange}/>
            {id != null && dateComponent}
            {id != null && <div className={classes.iconWrapper} onClick={() => deleteTodo(id)}>
                <FaTrash/>
            </div>}
        </div>

    </div>
}

export default injectSheet(ToDosStyle)(Todo)