
export const ToDosStyle = {
    todo:{
        borderBottom:'1px dotted #ccc',
        padding: 10,
        display: 'flex',
        alignItems: 'center'
    },
    inputContainer:{
        position:'relative',
        display: 'flex',
        justifyContent:'space-between',
        width: '92%',

    },
    '@keyframes slideRight': {
        from: {width: 0},
        to: {width: '92%'}
    },
    inputContainerCompleted:{

        '&:before':{
            animationName: 'slideRight',
            animationDuration: '1s',
            content:'""',
            position:'absolute',
            top:'50%',
            borderBottom: '1px solid grey',
            width:'92%'
        }
    },
    iconWrapper:{
        cursor:'pointer',
        width:30,
        height:30,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        borderRadius:'50%',
        '&:hover':{
            transform: 'rotateX(20deg)',
            backgroundColor:'#ccc'
        }
    },
    newDueDateComponent:{
        fontSize: 11,
        cursor:  'pointer',
        width:'130px',
        display:'flex',
        alignItems:'center'
    }
}