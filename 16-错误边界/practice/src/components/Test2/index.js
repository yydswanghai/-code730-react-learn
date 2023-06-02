import React from 'react'
import ErrorBound from './ErrorBound'

/**
 * 使用错误处理组件
 */

function HasChildComp() {
    return <div style={{ background: 'rgb(208 210 242)' }}>
        <h1>parentComp</h1>
        <ChildComp />
    </div>
}
// 模拟错误
const getDatas = () => { return };
function ChildComp() {
    const datas = getDatas()
    const spans = datas.map(it => <span>渲染点啥</span>)
    return <div style={{ background: 'rgb(242 208 237)' }}>
        <h2>ChildComp</h2>
        {spans}
    </div>
}

function Comp() {
    return <div style={{ background: '#b9e1f2' }}>
        <h3>Comp</h3>
    </div>
}

export default function Test2() {
    return (
        <>
            <ErrorBound>
                <HasChildComp />
            </ErrorBound>
            <Comp />
        </>
    )
}