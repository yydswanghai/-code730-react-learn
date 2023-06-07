import React, { useState, useEffect } from 'react'

/**
 * 无论如何重复渲染，让副作用函数始终是挂载时仅执行一次，卸载时清理函数仅执行一次
 */

function TestEffect() {
    useEffect(() => {
        console.log('副作用函数，仅挂载时运行一次')
        return () => {
            console.log('清理函数，仅卸载时运行一次')
        }
    }, []);// 使用空数组作为依赖项，则副作用函数仅在挂载的时候运行
    console.log('渲染组件');
    const [, forceUpdate] = useState({});

    return <h1>TestEffect组件
        <button onClick={() => forceUpdate({})}>刷新组件</button>
    </h1>
}

export default function Test3() {
    const [visible, setVisible] = useState(true);
    return (
        <div>
            { visible && <TestEffect /> }
            <button onClick={() => {
                setVisible(!visible)
            }}>显示/隐藏</button>
        </div>
    )
}
