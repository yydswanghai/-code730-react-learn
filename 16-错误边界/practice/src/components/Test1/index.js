import React from 'react'

/**
 * ? 问题 渲染期间发生错误，
 * ChildComp组件发生错误，而该组件自己处理不了，会向父组件抛出错误，
 * 父组件HasChildComp也处理不了，继续向App抛出错误，最后导致整个组件树卸载
 * 此时，浏览器插件的devtools都不会有组件树
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

export default function Test1() {
    return (
        <>
            <HasChildComp />
            <Comp />
        </>
    )
}