import { createStore, applyMiddleware } from '../redux/'
import reducer from './reducer'
import { createIncrease, createDecrease } from './action/number-action'
import { createLogger } from "redux-logger"

/* logger中间件应该要放在最后一个 */
const logger = createLogger({
    collapsed: false,
    duration: true
})
const store = createStore(reducer, applyMiddleware(logger));

const unlisten = store.subscribe(() => {
    console.log('监听器1，状态发生了改变', store.getState())
})

store.dispatch(createIncrease())
unlisten()
store.dispatch(createDecrease())