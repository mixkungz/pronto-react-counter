import { INCREASE_COUNTER, DECREASE_COUNTER } from './types'

const increaseCounter = () => {
  return { type: INCREASE_COUNTER }
}
const decreaseCounter = () => {
  return { type: DECREASE_COUNTER }
}

export { increaseCounter, decreaseCounter }
