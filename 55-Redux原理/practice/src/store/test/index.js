import store from '../index'
import { bindActionCreators } from '../../redux'
import { createIncrease, createDecrease, createSetAction } from '../action/number-action'

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