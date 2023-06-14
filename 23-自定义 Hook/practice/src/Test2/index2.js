import React, { useState } from 'react'
import useTimer from '../hooks/useTimer'

function Test() {
    useTimer(() => {
        console.log('Test 每隔一秒运行一次该副作用函数')
    }, 1000)
    return <h1>Test组件</h1>
}

export default function () {
    const [visible, setVisible] = useState(true);
    return (<div>
        {
            visible ? <Test /> : null
        }
        <button onClick={() => {
            setVisible(!visible)
        }}>隐藏/显示</button>
    </div>)
}