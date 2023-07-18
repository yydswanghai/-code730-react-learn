import React, { useState } from 'react'
import { Transition } from 'react-transition-group'

/**
 * 文档：https://reactcommunity.org/react-transition-group/transition
 */

const transitionStyles = {
    entering: { opacity: 1 },
    entered:  { opacity: 1 },
    exiting:  { opacity: 0 },
    exited:  { opacity: 0 },
};

const duration = 1000*5;
// false : exited => entering => entered
// true  : entered => exiting => exited

export default function Test() {
    const [inProp, setInProp] = useState(false);
    return (
        <div>
            <Transition in={inProp} timeout={duration} unmountOnExit>
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
