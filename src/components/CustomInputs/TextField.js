import React from 'react'
import injectSheet from 'react-jss'
import {TextField} from "../../assets/jss/Inputs";


const CustomInput = ({value = '', label, name, onChange=()=>{},
                         dataTestId, placeholder='', onKeypress, disabled, classes}) =>{

    return <input className={classes.input}
                  placeholder={placeholder}
                  onInput={onChange}
                  onChange={onChange}
                  value={value}
                  name={name}
                  disabled={disabled}
                  onKeyUp={onKeypress}
                  data-testid={dataTestId}/>
}

export default injectSheet(TextField)(CustomInput)