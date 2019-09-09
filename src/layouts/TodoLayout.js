import React from 'react'
import injectSheet from 'react-jss'
import {TodoLayoutJSS} from "../assets/jss/Layouts";

//A wrapper component for the todos
const TodoLayout = ({children, classes}) => {

    return (
        <div className={classes.app}>
            <div className={classes['app-bar']}>To-Do List</div>
            <div className={classes.content}>
                {children}
            </div>
        </div>)

}

export default injectSheet(TodoLayoutJSS)(TodoLayout)