import { legacy_createStore as createStore, bindActionCreators } from 'redux'
import * as actionType from './action-type'
import * as numAction from './action'
/**
 * @param state 之前仓库中的状态
 * @param {{type:string, payload:*}} action 描述要做什么的对象
 * @return 一个新的状态，如果是无效的操作类型，数据不变
 */
function reducer(state, action) {
    if(action.type === actionType.INCREASE){
        return state + 1;
    }
    if(action.type === actionType.DECREASE){
        return state - 1;
    }
    if(action.type === actionType.SET){
        return action.payload;
    }
    return state;
}
const store = createStore(reducer, 10);
const bindAction = bindActionCreators(numAction, store.dispatch);

console.log(store.getState())

// store.dispatch(numAction.getIncrease());
bindAction.getIncrease();

console.log(store.getState())

// store.dispatch(numAction.getSetAction(3));
bindAction.getSetAction(3);

console.log(store.getState())