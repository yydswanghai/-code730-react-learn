import loginUserReducer from './loginUser'
import usersReducer from './users.js'
import numberReducer from './number.js'
import { combineReducers } from 'redux'

/**
 * 统一合并后的reduces
 */
// export default (state = {}, action) => {
//     console.log('reducer运行了', state, action)
//     const newState = {
//         loginUser: loginUserReducer(state.loginUser, action),
//         users: usersReducer(state.users, action),
//         number: numberReducer(state.number, action)
//     };

//     return newState;
// }

export default combineReducers({
    loginUser: loginUserReducer,
    users: usersReducer,
    number: numberReducer
});