export const TextField = {
    input: {
        width:250,
        background: 'none',
        border:'none',
        outline:'none',
        minWidth:50
    }
}

export const Checkbox = {
    checkbox: {

    }
}

export const DatePicker = {
    date: {

        width:130,
        background: 'url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat',
        border:'none',
        outline:'none',
        minWidth:50,
        '&::-webkit-inner-spin-button':{
            display: 'none'
        },
        '&::-webkit-calendar-picker-indicator':{
            opacity:0
        }
    }
}