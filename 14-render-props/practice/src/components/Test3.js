import React from 'react'
import withMouseListener from './withMouseListener'

/**
 * 2. 使用高阶组件
 */

const Div = props => (<div style={{
    width: 100,
    height: 100,
    background: '#008c8c',
    position: 'absolute',
    left: props.x - 50,
    top: props.y - 50
}}></div>)

const Point = props => (<>鼠标x: {props.x} 鼠标y: {props.y}</>)

const MouseDiv = withMouseListener(Div);
const MousePoint = withMouseListener(Point);

export default function Test3() {
    return (
        <div>
            <MouseDiv />
            <MousePoint />
        </div>
    )
}
