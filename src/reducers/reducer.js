import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './../constants/constants.js'
import { combineReducers } from 'redux'

const todoReducer = (state=[], action) => {
  switch(action.type){

    case ADD_TODO:
      console.log('add todo reducer')
      return [...state, { text: action.text, completed: false, id: action.id }]

    case SET_VISIBILITY_FILTER:
      console.log('set visibility filter reducer')
      return [...state, { currentFilter: action.filter }]

    case TOGGLE_TODO:
      console.log('Toggle todo reducer')
      return [...state, {completed: ! state.completed}]

    default:
      console.log('default reducer')
      return state
  }
}
const combReducer = combineReducers({
  todoReducer,
})

export default combReducer
