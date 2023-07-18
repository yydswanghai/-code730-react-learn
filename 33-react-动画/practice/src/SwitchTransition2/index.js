import React, { useState } from 'react'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import "animate.css"
/**
 * 使用animate.css的样式
 * SwitchTransition需要与CSSTransition联用
 */

export default function Test() {
    const [show, setShow] = useState(true);

    return (
        <div style={{ margin: '0 auto', width: 200 }}>
            <SwitchTransition mode='out-in'>
                <CSSTransition appear timeout={800} key={show} classNames={{
                    exit: 'animate__bounceOutLeft',
                    enter: 'animate__bounceInRight'
                }}>
                    <h1 className='animate__animated animate__fast'>{ show ? 'title1' : 'title2' }</h1>
                </CSSTransition>
            </SwitchTransition>
            <button onClick={() => {
                setShow(!show)
            }}>切换</button>
        </div>
    )
}