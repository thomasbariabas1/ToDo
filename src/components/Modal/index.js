import React from 'react';
import ReactDOM from 'react-dom';
import injectSheet from 'react-jss'
import {ModalStyle} from "../../assets/jss/Modal";
import Button from '../../components/CustomButton'
import {ButtonStyles} from "../../assets/jss/Button";

const Modal = (props) => {
    const {show, close, children, classes} = props
    return (show?
        ReactDOM.createPortal(
            <div className={classes.modal}>
                <div className={classes.modalContent}>
                   Congratulation on completing 3 Tasks today!
                    <Button onClick={close} className={classes.modalButton}>Close</Button>
                </div>
            </div>,
            document.querySelector("#modal")
        ):null
    )
}

export default injectSheet({...ModalStyle, modalButton:ButtonStyles.modalButton})(Modal);