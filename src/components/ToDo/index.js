import React, {useState, useEffect} from 'react'
import className from 'classnames'
import moment from 'moment'
import injectSheet from 'react-jss'
import {ToDosStyle} from "../../assets/jss/ToDos";
import CustomInput from '../CustomInputs/TextField'
import CustomCheckbox from "../CustomInputs/CheckBox";
import CustomDate from "../CustomInputs/DatePicker";
import {FaTrash} from 'react-icons/fa';

const Todo = (props) => {

    const {classes, deleteTodo, editTodo, addTodo, completeTodo, dataTestId, todo} = props;
    const {placeholder, id, completed} = todo;

    const [newTodo, setNewTodo] = useState(todo)

    useEffect(() => {
        setNewTodo(todo)
    }, [todo])

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
    const onComplete = ({target: {name, value}}) => {
        completeTodo({...todo, [name]: value})
    }

    const addNewTodo = () => {
        if (id == null && newTodo.content) {
            addTodo(newTodo)
        }
    };
    const onKeyPressAddTodo = (e) => {
        if (e.keyCode === 13) {
            addNewTodo()
        }
    }
    const addNewDueDate = () => {
        if (!newTodo.completed)
            onChange({target: {name: 'dueDate', value: moment().format('YYYY-MM-DD')}})
    };
    //Show the test Add due date and in case the user click it change to date picker
    const addNewDueDateComponent = <span style={newTodo.completed ? {cursor: 'auto'} : {}}
                                         data-testid={dataTestId + '-dueDate'}
                                         className={classes.newDueDateComponent}
                                         onClick={addNewDueDate}>Add due date</span>;


    //In case there isn't any due date, show him the addNewDueDateComponent otherwise the date picker
    const dateComponent = (!newTodo.dueDate ?
        addNewDueDateComponent
        :
        <CustomDate value={newTodo.dueDate}
                    disabled={completed}
                    name={'dueDate'}
                    dataTestId={dataTestId + '-dueDate'}
                    onChange={onChange}/>);

    return <div className={classes.todo} data-testid={'todo'} onBlur={addNewTodo}>
        {/*The checkbox that used to complete a todo*/}
        {id != null && <CustomCheckbox dataTestId={dataTestId + '-complete'}
                                       value={newTodo.completed}
                                       name={'completed'}
                                       onChange={onComplete}/>}

        {/*The checkbox that used to complete a todo*/}
        <div className={inputContainerClasses}>
            <CustomInput value={newTodo.content}
                         disabled={completed}
                         name={'content'}
                         placeholder={placeholder}
                         onChange={onChange}
                         onKeypress={onKeyPressAddTodo}
                         dataTestId={dataTestId}
            />

            {/*The  date picker that used to add due date to the  todo*/}
            {id != null && dateComponent}

            {/*The icon that used to delete a todo*/}
            {id != null &&
            <div className={classes.iconWrapper} data-testid={dataTestId + '-delete'} onClick={() => deleteTodo(id)}>
                <FaTrash/>
            </div>}
        </div>

    </div>
}

export default injectSheet(ToDosStyle)(Todo)
