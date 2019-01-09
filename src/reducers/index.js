import { combineReducers } from 'redux'
import { counterReducer } from './counter'

const rootReducers = combineReducers({
  counter: counterReducer
})

export { rootReducers }
