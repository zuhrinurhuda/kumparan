import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import { userReducers, postReducers } from '../reducers'

const reducers = combineReducers({
  userReducers,
  postReducers
})
const middleware = applyMiddleware(thunk)
const store = createStore(reducers, middleware)

export default store
