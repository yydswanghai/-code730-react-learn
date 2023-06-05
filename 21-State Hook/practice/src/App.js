import React, { useState } from 'react'

export default function App() {

    // const arr = useState(0);
    // const n = arr[0];
    // const setN = arr[1];
    const [ n, setN ] = useState(0);

    const [ visible, setVisible ] = useState(true)
    console.log('重新运行', setVisible)
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