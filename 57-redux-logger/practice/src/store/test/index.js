import store from '../index'
import { createIncrease, createDecrease } from './action/number-action'

const unlisten = store.subscribe(() => {
    console.log('监听器1，状态发生了改变', store.getState())
})

store.dispatch(createIncrease())
unlisten()
store.dispatch(createDecrease())