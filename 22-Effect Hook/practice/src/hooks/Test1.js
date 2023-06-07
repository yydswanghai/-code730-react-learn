import React, { useState, useEffect } from 'react'

/**
 * 副作用函数的运行时间点，是在页面完成真实的UI渲染之后。因此它的执行是异步的
 */

export default function Test1() {
    const [n, setN] = useState(0);

    // 以下代码属于副作用
    // document.title = `计数器：${n}`

    useEffect(() => {
        console.log('改变页面标题的副作用操作')
        document.title = `计数器：${n}`
    })
    useEffect(() => {
        console.log('其他的副作用操作')
    })

    return (
        <div>
            <span>{n}</span>
            <button onClick={() => {
                setN(n + 1)
            }}>+</button>
        </div>
    )
}
