import {combineReducers} from 'redux'
import workerReducer from './workerReducer'
import userReducer from './userReducer'
import categoryReducer from './categoryReducer'

export default combineReducers({workerReducer,userReducer,categoryReducer})
