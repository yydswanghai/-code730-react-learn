import { createStore } from '../redux'
import reducer from './reducer'
import { createIncrease } from './action/number-action'

const store = createStore(reducer);

const unlisten = store.subscribe(() => {
    console.log('监听器1，状态发生了改变', store.getState())
})

store.dispatch(createIncrease())

unlisten()

store.dispatch(createIncrease())
console.log('移除了监听器后', store.getState())