import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import "./index2.css";

function Comp1({ visible }) {
    return <CSSTransition in={visible} timeout={1000} unmountOnExit appear>
        <h1 className='title'>Comp1</h1>
    </CSSTransition>
}
function Comp2({ visible }) {
    return <CSSTransition in={visible} timeout={1000} unmountOnExit>
        <h1 className='title'>Comp2</h1>
    </CSSTransition>
}

export default function Test() {
    const [showComp1, setShowComp1] = useState(true);

    return (
        <div className='container'>
            <div className="container-comp">
                <Comp1 visible={showComp1} />
                <Comp2 visible={!showComp1} />
            </div>
            <button onClick={() => {
                setShowComp1(!showComp1)
            }}>切换组件</button>
        </div>
    )
}
