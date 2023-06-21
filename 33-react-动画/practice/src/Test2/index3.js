import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import "animate.css"
import "./index3.css"

function MyTransition({ visible, children }) {
    return <CSSTransition in={visible} timeout={800} unmountOnExit appear classNames={{
        exitActive: 'animate__bounceOutLeft',
        exitDone: 'exit-done',
        enter: 'animate__bounceInRight',
        appearActive: 'animate__bounceInUp'
    }}>
        {children}
    </CSSTransition>
}
function Comp1() {
    return <h1 className='title animate__animated animate__fast'>Comp1</h1>
}
function Comp2() {
    return <h1 className='title animate__animated animate__fast'>Comp2</h1>
}

export default function Test() {
    const [showComp1, setShowComp1] = useState(true);

    return (
        <div className='container'>
            <div className="container-comp">
                <MyTransition visible={showComp1}>
                    <Comp1 />
                </MyTransition>
                <MyTransition visible={!showComp1}>
                    <Comp2 />
                </MyTransition>
            </div>
            <button onClick={() => {
                setShowComp1(!showComp1)
            }}>切换组件</button>
        </div>
    )
}