import React, { useState, useRef } from 'react'
import { Transition } from 'react-transition-group'

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

const duration = 1500;
// false : exited => entering => entered
// true  : entered => exiting => exited
export default function App() {
    const [inProp, setInProp] = useState(false);
    return (
        <div className="app">
            <Transition in={inProp} timeout={duration} mountOnEnter>
                {state => {
                    console.log(state)
                    return (
                        <div style={{
                            opacity: 0,
                            transition: `opacity ${duration}ms ease-in-out`,
                            ...transitionStyles[state]
                        }}><h1>abc</h1></div>
                    )
                }}
            </Transition>
            <button onClick={() => setInProp(!inProp)}>Toggle</button>
        </div>
    )
}