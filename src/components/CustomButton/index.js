import React from 'react'
import injectSheet from 'react-jss'
import {ButtonStyles} from "../../assets/jss/Button";


const Button = ({onClick, children, className, dataTestId, classes}) => {

    return (
        <button data-testid={dataTestId}
                className={classes.button + " " + className}
                onClick={onClick}>
            {children}
        </button>
    )
}

export default injectSheet(ButtonStyles)(Button)