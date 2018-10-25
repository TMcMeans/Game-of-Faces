import { combineReducers } from 'redux'
import { showAllCharsReducer } from './showAllCharsReducer.js'

const rootReducer = combineReducers({
  chars: showAllCharsReducer,
})

export default rootReducer;