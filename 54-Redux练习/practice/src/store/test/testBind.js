import { legacy_createStore as createStore, bindActionCreators } from 'redux'
import * as numAction from '../action'
import reducer from '../reducer'

const store = createStore(reducer, 10);
/**
 * 使用bindActionCreators
 */
const bindAction = bindActionCreators(numAction, store.dispatch);
console.log(store.getState())

bindAction.createIncrease();
console.log(store.getState())

bindAction.createSetAction(3);
console.log(store.getState())