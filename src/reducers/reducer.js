import { ADD_TODO } from './../constants/constants.js'
import { combineReducers } from 'redux'

const helloWorldReducer = (state={message: 0}, action) => {
  switch(action.type){

    case PLUS:
      console.log('PLUS reducer')
      return Object.assign({}, state, { message: state.message + 1 })


    default:
      console.log('default reducer')
      return state
  }
}
const combReducer = combineReducers({
  helloWorldReducer,
})

export default combReducer
