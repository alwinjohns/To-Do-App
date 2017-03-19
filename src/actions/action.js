import { PLUS, MINUS, RESET } from './../constants/constants.js'

export const increment = () => {
  console.log('+ action created')
  return {
    type: PLUS,
  }
}
