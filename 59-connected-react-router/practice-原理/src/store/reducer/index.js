import { combineReducers } from 'redux'
import counter from './counter'
import students from './student'
import { connectRouter } from '../../connected-react-router'
import history from '../history'
/**
 * 统一合并后的reduces
 */
export default combineReducers({
    counter,
    students,
    router: connectRouter(history)
})