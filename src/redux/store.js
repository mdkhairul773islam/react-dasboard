import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../redux/reducers/index'

const initialSate = {}


export const store = createStore(
    rootReducer,
    initialSate,
    composeWithDevTools(applyMiddleware(logger))

)
