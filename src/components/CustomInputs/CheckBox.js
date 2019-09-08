import React from 'react'
import injectSheet from 'react-jss'
import {Checkbox} from "../../assets/jss/Inputs";


const CustomCheckbox= ({value = '', name,  onChange=()=>{},  classes}) =>{

    const onCheckboxChange = ({target: {name, checked}}) => {
        onChange({target: {name, value: checked}})
    };

    return <input type={'checkbox'}
                  name={name}
                  className={classes.checkbox}
                  onChange={onCheckboxChange}
                  checked={value}/>
};

export default injectSheet(Checkbox)(CustomCheckbox)