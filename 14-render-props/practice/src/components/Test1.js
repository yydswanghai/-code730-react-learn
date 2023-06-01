import React from 'react'
import MovablePanel from './MovablePanel'
import ShowMousePoint from './ShowMousePoint'

/**
 * ? 问题: 组件MovablePanel与组件ShowMousePoint的功能处理逻辑完全一样，仅仅显示不同
 */

export default function Test1() {
    return (
        <div>
            <MovablePanel />
            <ShowMousePoint />
        </div>
    )
}
