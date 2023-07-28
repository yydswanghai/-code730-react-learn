import React, { useState, useEffect, useMemo } from 'react'
import matchPath from './matchPath'
import context from './context'
import PropTypes from 'prop-types'

const ctxValue = {};// 上下文中的对象
let unListen;
export default function Router(props) {
    const [location, setLocation] = useState(props.history.location);
    ctxValue.history = props.history;
    ctxValue.location = location;
    ctxValue.match = matchPath('/', location.pathname)

    unListen = useMemo(() => {
        return props.history.listen((location, action) => {
            setLocation(location)
        })
    },[]);

    useEffect(() => {
        return unListen;
    }, [])

    return <context.Provider value={ctxValue}>
        {props.children}
    </context.Provider>
}

Router.propTypes = {
    history: PropTypes.object.isRequired,
    children: PropTypes.node
}