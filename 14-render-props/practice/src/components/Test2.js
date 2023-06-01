import React from 'react'
import MouseListener from './MouseListener'

/**
 * 1. 使用render props的思维
 * 其实就是 props.children 没有任何新的api，但是这种方式更习惯上写为 props.render，故称为 render props
 * 本质上就是利用了js的灵活性，将props.children作为函数返回并传递参数
 */

const renderDiv = mouse => (<div style={{
    width: 100,
    height: 100,
    background: '#008c8c',
    position: 'absolute',
    left: mouse.x - 50,
    top: mouse.y - 50
}}></div>)

const renderPoint = mouse => (<>鼠标x: {mouse.x} 鼠标y: {mouse.y}</>)

export default function Test2() {
    return (
        <div>
            {/* <MouseListener>
                {mouse => <div style={{
                    width: 100,
                    height: 100,
                    background: '#008c8c',
                    position: 'absolute',
                    left: mouse.x - 50,
                    top: mouse.y - 50
                }}></div>}
            </MouseListener>
            <MouseListener>
                {mouse => <>鼠标x: {mouse.x} 鼠标y: {mouse.y}</>}
            </MouseListener> */}
            <MouseListener render={renderDiv} />
            <MouseListener render={renderPoint} />
            <MouseListener />
        </div>
    )
}
