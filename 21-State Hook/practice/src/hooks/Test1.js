import React, { useState } from 'react'

/**
 * state hook 的使用
 * 第二个参数是一个更新状态函数，只要状态值改变了，重新渲染(即整个函数App会重新运行一次)
 */

export default function Test1() {
    // const arr = useState(0);
    // const n = arr[0];
    // const setN = arr[1];
    const [ n, setN ] = useState(0);
    const [ visible, setVisible ] = useState(true);
    console.log('Test1 render')

    return (
        <div>
            <p style={{ display: visible ? 'block' : 'none' }}>
                <button onClick={() => {
                    setN(n + 1)
                }}>+</button>
                <span>{n}</span>
                <button onClick={() => {
                    setN(n - 1)
                }}>-</button>
            </p>

            <button onClick={() => {
                setVisible(!visible)
            }}>显示/隐藏</button>
        </div>
    )
}