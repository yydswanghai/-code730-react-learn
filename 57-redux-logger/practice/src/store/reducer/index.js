import numberReducer from './number.js'
import { combineReducers } from 'redux'

/**
 * 统一合并后的reduces
 */
export default combineReducers({
    number: numberReducer
})