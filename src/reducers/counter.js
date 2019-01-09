import { INCREASE_COUNTER, DECREASE_COUNTER } from '../actions/types'

const initialState = 0

const counterReducer = (state = initialState, actions) => {
  switch (actions) {
    case INCREASE_COUNTER:
      return state + 1
    case DECREASE_COUNTER:
      return state - 1
    default:
      return state
  }
}

export { counterReducer }
