import { createStore, bindActionCreators } from '../redux'
import reducer from './reducer'
import { createIncrease, createDecrease, createSetAction } from './action/number-action'

const store = createStore(reducer);
const bind = bindActionCreators({
    createIncrease,
    createDecrease,
    createSetAction
}, store.dispatch);

const unlisten = store.subscribe(() => {
    console.log('监听器1，状态发生了改变', store.getState())
})

bind.createIncrease();

unlisten()

bind.createIncrease();

console.log('移除了监听器后', store.getState())