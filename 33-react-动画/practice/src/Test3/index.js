import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

export default function Test() {
    const [show, setShow] = useState(true);

    return (
        <>
            <SwitchTransition>
                <CSSTransition timeout={5000} key={show}>
                    <h1>{ show ? 'title1' : 'title2' }</h1>
                </CSSTransition>
            </SwitchTransition>
            <button onClick={() => {
                setShow(!show)
            }}>切换</button>
        </>
    )
}