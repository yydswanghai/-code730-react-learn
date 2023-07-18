import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import './index.css'

/**
 * SwitchTransition需要与CSSTransition联用
 */

export default function Test() {
    const [show, setShow] = useState(true);

    return (
        <>
            <SwitchTransition mode='out-in'>
                <CSSTransition appear timeout={3000} key={show}>
                    <h1>{ show ? 'title1' : 'title2' }</h1>
                </CSSTransition>
            </SwitchTransition>
            <button onClick={() => {
                setShow(!show)
            }}>切换</button>
        </>
    )
}