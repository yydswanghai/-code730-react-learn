import React from 'react'
import ErrorBound from './ErrorBound'

/**
 * 注意的点
 */

function HasChildComp() {
    return <div style={{ background: 'rgb(208 210 242)' }}>
        <h1>parentComp</h1>
        <ChildComp />
    </div>
}
// 事件中的错误无法捕获
function ChildComp() {
    return <div style={{ background: 'rgb(242 208 237)' }}>
        <h2>ChildComp</h2>
        <button onClick={() => {
            throw new Error('点击时发生的错误')
        }}>点击</button>
    </div>
}

function Comp() {
    return <div style={{ background: '#b9e1f2' }}>
        <h3>Comp</h3>
    </div>
}

export default function Test3() {
    return (
        <>
            <ErrorBound>
                <HasChildComp />
            </ErrorBound>
            <Comp />
        </>
    )
}
