import View from './view'
import {connect} from "react-redux";
import {actions} from "../../redux-store/actions/ToDoActions";

const mapStateToProps = (state)=>{
    return {
        todos:state.ToDoReducer.todos,
        showModal:state.ToDoReducer.showModal
    }
}

const mapDispatchToActions = {
    ...actions
}

export default connect(mapStateToProps, mapDispatchToActions)(View)