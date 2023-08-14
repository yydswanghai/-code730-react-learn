import actionTypes from './actionTypes'
import { isPlainObject } from './utils'
/**
 * 实现createStore功能
 * @param {function} reducer reducer
 * @param {*} defaultState 默认状态
 */
export default function (reducer, defaultState) {

    let currentReducer = reducer,// 仓库中当前reducer
        currentState = defaultState;// 仓库中当前状态
    let listeners = [];// 记录所有的监听器
    /* 分发 */
    function dispatch(action) {
        if(!isPlainObject(action)){
            throw new TypeError('action 必须是一个平面对象')
        }
        // 验证action的type属性是否存在
        if(action.type === undefined){
            throw new TypeError('action 必须有"type"属性')
        }
        currentState = currentReducer(currentState, action);
        listeners.forEach(listener => listener());
    }
    function getState() {
        return currentState;
    }
    /* 添加一个监听器（订阅器） */
    function subscribe(listener) {
        listeners.push(listener);
        // 返回取消监听，将之前添加的监听器，从数组中移除
        let isRemove = false;// 是否已经移除掉了
        return () => {
            if(isRemove){
                return;
            }
            listeners = listeners.filter(it => it !== listener);
            isRemove = true;
        }
    }
    // 1.初始创建时，调用一次dispatch
    dispatch({ type: actionTypes.INIT })
    return {
        dispatch,
        getState,
        subscribe
    }
}