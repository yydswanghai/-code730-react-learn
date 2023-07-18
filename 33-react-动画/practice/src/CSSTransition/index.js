import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import "./index.css";

export default function Test() {
    const [visible, setVisible] = useState(true);// 是否可见

    return (
        <div>
            <CSSTransition in={visible} timeout={2000} classNames='test'>
                <h1>title</h1>
            </CSSTransition>
            <button onClick={() => {
                setVisible(!visible)
            }}>切换显示状态</button>
        </div>
    )
}