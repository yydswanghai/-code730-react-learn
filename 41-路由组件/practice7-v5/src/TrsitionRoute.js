import React from 'react'
import { Route } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import "animate.css"

export default function TrsitionRoute(props) {
    const { component: Component, enter = 'animate__fadeInRight', exit = 'animate__fadeOutLeft', ...rest } = props
    return (
        <Route {...rest}>
            {ctx => {
                return <CSSTransition
                    timeout={800}
                    in={Boolean(ctx.match)}
                    classNames={{
                        enter: `animate__animated animate__fast ${enter}`,
                        exit: `animate__animated animate__fast ${exit}`
                    }}
                    mountOnEnter={true}
                    unmountOnExit={true}
                >
                    <Component />
                </CSSTransition>
            }}
        </Route>
    )
}
