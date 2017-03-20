import { connect } from 'react-redux'
import AddToDo from './../components/addTodo.js'
import {addTodo} from './../actions/action.js'

const mapDispatchToProps = (dispatch) => {
  return {
      onSubmit: (text) => {
        dispatch(addTodo(text))
      },
  }
}

const AddTodoContainer = connect(null, mapDispatchToProps) (AddToDo)
export default AddTodoContainer
