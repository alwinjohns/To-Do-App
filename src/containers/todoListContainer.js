import { connect } from 'react-redux'
import TodoList from './../components/todoList.js'
import {toggleTodo} from './../actions/action.js'

const mapStateToProps = (state) => {
  console.log(state.todos)
    return {
      todos: state.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      onToggle: (id) => {
        dispatch(toggleTodo(id))
      },
  }
}

const TodoListContainer = connect(mapStateToProps, mapDispatchToProps) (TodoList)

export default TodoListContainer
