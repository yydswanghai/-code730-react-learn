import React from 'react'
import './index.css'
import { CSSTransition } from "react-transition-group"

FadeTransition.defaultProps = {
    timeout: 800
}

export default function FadeTransition(props) {
    const addTransition = (node) => {
        node.style.transition = `opacity ${props.timeout}ms`
    }
    const removeTransition = (node) => {
        node.style.transition = ''
    }
    return (
        <CSSTransition {...props} classNames="fade" 
            onExit={addTransition}
            onExited={(node) => {
                removeTransition(node);
                props.onExited && props.onExited(node)
            }}
            onEnter={addTransition}
            onEntered={(node) => {
                removeTransition(node);
                props.onEntered && props.onEntered(node)
            }}
        />
    )
}