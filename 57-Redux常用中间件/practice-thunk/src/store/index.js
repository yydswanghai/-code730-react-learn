import { createStore, applyMiddleware } from '../redux/'
import reducer from './reducer'
import logger from "redux-logger"
import thunk from '../redux-thunk'


/* logger中间件应该要放在最后一个 */
export default createStore(reducer, applyMiddleware(
    thunk.withExtraArgument('额外参数123'),
    logger
));