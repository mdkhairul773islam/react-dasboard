import { createStore } from 'redux'
import rootReducer from '../redux/reducers/index'

const initialSate = {}

export const store = createStore(
    rootReducer,
    initialSate
)

