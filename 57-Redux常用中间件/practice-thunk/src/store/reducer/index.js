import numberReducer from './number'
import usersReducer from './users'
import { combineReducers } from '../../redux/'

/**
 * 统一合并后的reduces
 */
export default combineReducers({
    number: numberReducer,
    users: usersReducer
})