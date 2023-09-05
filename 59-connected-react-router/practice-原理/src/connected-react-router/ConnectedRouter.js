import React, { useEffect, useContext } from 'react'
import { Router } from 'react-router-dom'
import { createLoactionChange } from './actionCreators'
import { ReactReduxContext } from 'react-redux'

export default function ConnectedRouter(props) {
    const ctx = useContext(ReactReduxContext);

    useEffect(() => {
        let history = props.history;
        let unlisten = history.listen((location, action) => {
            let reduxAction = createLoactionChange(location, action);
            let dispatch = ctx.store.dispatch;
            dispatch(reduxAction);
        })
        return unlisten;
    }, [])

    return (
        <Router history={props.history}>
            {props.children}
        </Router>
    )
}