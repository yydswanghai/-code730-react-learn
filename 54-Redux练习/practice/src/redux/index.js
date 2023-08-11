import { legacy_createStore as createStore } from 'redux'
import { createIncrease, createDecrease } from './action/number-action'
import reducer from './reducer'

const store = createStore(reducer);
console.log('初始化', store.getState())

const unListen = store.subscribe(() => {
    console.log('状态改变了', store.getState())
})

store.dispatch(createIncrease());

unListen();// 取消监听

store.dispatch(createDecrease());