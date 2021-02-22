import { combineReducers } from 'redux'
import { sapientReducer } from './sapient.reducer'

const createReducer = asyncReducers => combineReducers({
  sapient: sapientReducer,
  ...asyncReducers
})

export default createReducer
