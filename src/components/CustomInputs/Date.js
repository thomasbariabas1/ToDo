import React from 'react'
import injectSheet from 'react-jss'
import {DatePicker} from "../../assets/jss/Inputs";


const CustomDate = ({value = '', label, name, onChange=()=>{}, onBlur, disabled, dataTestId, classes}) =>{

    return <input type={'date'}
                  name={name}
                  className={classes.date}
                  onInput={onChange}
                  onChange={onChange}
                  value={value}
                  disabled={disabled}
                  data-testId={dataTestId}
                  />
}

export default injectSheet(DatePicker)(CustomDate)