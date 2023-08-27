import { combineReducers } from 'redux'
import counter from './counter'
import students from './student'
/**
 * 统一合并后的reduces
 */
export default combineReducers({
    counter,
    students
})