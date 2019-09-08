import React from 'react'
import injectSheet from 'react-jss'
import {Checkbox} from "../../assets/jss/Inputs";


const CustomCheckbox= ({value = '', name,  onChange=()=>{}, dataTestId,  classes}) =>{

    const onCheckboxChange = ({target: {name, checked}}) => {
        onChange({target: {name, value: checked}})
    };

    return <input type={'checkbox'}
                  name={name}
                  className={classes.checkbox}
                  onChange={onCheckboxChange}
                  data-testId={dataTestId}
                  checked={value}/>
};

export default injectSheet(Checkbox)(CustomCheckbox)