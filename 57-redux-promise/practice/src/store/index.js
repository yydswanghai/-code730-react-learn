import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import logger from "redux-logger"
import promise from 'redux-promise'
import MyPromise from '../redux-promise'

/* logger中间件应该要放在最后一个 */
export default createStore(reducer, applyMiddleware(
    promise,
    logger
));