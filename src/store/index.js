// src/store/index.js

import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import rootReducer from '../reducers'

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const loggerMiddleware = createLogger()

const middleware = [
  thunkMiddleware,
  loggerMiddleware
]

const store = createStore(
  rootReducer,
  storeEnhancers(
    applyMiddleware(...middleware)
  )
)

export default store