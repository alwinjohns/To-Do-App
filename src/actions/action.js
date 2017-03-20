import { ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER } from './../constants/constants.js'
let nextid=0
export const addTodo = (text) => {
  console.log('add todo action created')
  return {
    type: ADD_TODO,
    text,
    id: nextid++,
  }
}

export const toggleTodo = (id) => {
  console.log('toggle todo action created')
  return {
    type: TOGGLE_TODO,
    id,
  }
}

export const setVisibilityFilter = (filter) => {
  console.log('set visibility filter action created')
  return {
    type: SET_VISIBILITY_FILTER,
    filter,
  }
}
