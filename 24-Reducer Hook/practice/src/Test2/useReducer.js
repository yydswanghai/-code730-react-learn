import { useState } from 'react'

/**
 * 自定义hook，抽离数据处理
 * @param {function} reducer reducer函数，标准格式
 * @param {*} initalState 初始状态
 * @param {function} initalFunc 计算初始值的函数
 */
export default function useReducer(reducer, initalState, initalFunc) {
    const init = initalFunc ? initalFunc(initalState) : initalState;
    const [state, setState] = useState(init);

    function dispatch(action) {
        const newState = reducer(state, action);
        console.log(`【日志】 oldState：${state} -> newState：${newState}`)
        setState(newState);
    }

    return [state, dispatch];
}