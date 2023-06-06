import React, { useState } from 'react'

/**
 * useState返回的函数（数组的第二项），引用不变（节约内存空间）
 * 随便按个按钮使其重新渲染，并将setN更新函数添加到window.arr，在控制台 window.arr[0] === window.arr[1] => true
 * 所以window.arr里每一项的函数都是同一个引用
 */

window.arr = []

export default function Test3() {
    const [ n, setN ] = useState(0);
    const [ visible, setVisible ] = useState(true);
    window.arr.push(setN)
    console.log(window.arr)
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
