import React, { useState } from 'react'

/**
 * 只关注数据的逻辑
 * @param {*} state
 * @param {object} action: {type, payload}
 */
function reducer(state, action) {
    switch (action.type) {
        case 'increase':
            return state + 1;
        case 'decrease':
            if(state === 0){
                return 0;
            }
            return state - 1;
        default:
            return state;
    }
}

export default function Test() {
    const [n, setN] = useState(0);
    // 数据分发
    function dispatch(action) {
        const newN = reducer(n, action);
        console.log(`【日志】 n：${n} -> newN：${newN}`)
        setN(newN);
    }
    // 界面只关注渲染逻辑
    return (
        <div>
            <button onClick={() => {
                dispatch({ type: 'increase' })
            }}>+</button>
            <span>{n}</span>
            <button onClick={() => {
                dispatch({ type: 'decrease' })
            }}>-</button>
        </div>
    )
}