import { legacy_createStore as createStore, applyMiddleware } from 'redux'
import reducer from './reducer'
import { createLogger } from "redux-logger"

/* logger中间件应该要放在最后一个 */
const logger = createLogger({
    collapsed: false,
    duration: true
})
export default createStore(reducer, applyMiddleware(
    logger
));

