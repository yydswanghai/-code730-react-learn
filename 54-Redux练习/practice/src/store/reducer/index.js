import loginUserReducer from './loginUser'
import usersReducer from './users.js'
import numberReducer from './number.js'
import { combineReducers } from 'redux'

export default combineReducers({
    loginUser: loginUserReducer,
    users: usersReducer,
    number: numberReducer
});