import { isPlainObject } from './utils'
import actionTypes from './actionTypes'

/* 验证 */
function validateReducers(reducers) {
    if(typeof reducers !== 'object'){
        throw new TypeError(`${reducers} 必须是一个对象`)
    }
    if(!isPlainObject(reducers)){
        throw new TypeError(`${reducers} 必须是一个平面对象`)
    }
    // 验证reducer的返回结果是否为undefined
    // 如果不匹配会返回原来的state，而不是undefined
    for (const prop in reducers) {
        if (reducers.hasOwnProperty(prop)) {
            const reducer = reducers[prop];
            let state = reducer(undefined, { type: actionTypes.INIT });
            if(state === undefined){
                throw new Error('验证报错(INIT)：reducer must not return an undefined')
            }
            state = reducer(undefined, { type: actionTypes.UNKNOWN });
            if(state === undefined){
                throw new Error('验证报错(UNKNOWN)：reducer must not return an undefined')
            }
        }
    }
}
/**
 * 合并，并返回reducer函数
 * @param {Object} reducers
 * {
 *   number: numberReducer(state.number, action)
 * }
 * => function (){
 *  return { number: xxx状态 }
 * }
 */
export default function (reducers){
    validateReducers(reducers);
    return function (state = {}, action) {
        const newState = {};
        for (const prop in reducers) {
            if (reducers.hasOwnProperty(prop)) {
                const reducer = reducers[prop];
                newState[prop] = reducer(state[prop], action);
            }
        }
        return newState;
    }
}