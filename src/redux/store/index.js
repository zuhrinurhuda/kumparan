import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'

import { userReducers, postReducers, photoReducers } from '../reducers'

const reducers = combineReducers({
  userReducers,
  postReducers,
  photoReducers
})
const middleware = applyMiddleware(thunk)
const store = createStore(reducers, composeWithDevTools(middleware))

export default store
