import React, { useState, useEffect, useMemo } from 'react'
import matchPath from '../utils/matchPath'
import ctx from './context'
import PropTypes from 'prop-types'

export default function Router(props) {
    const [location, setLocation] = useState(props.history.location);

    let unListen = useMemo(() => {
        return props.history.listen((location, action) => {
            setLocation(location)
        })
    },[]);

    useEffect(() => {
        return unListen;
    }, [])

    // Router上下文里match的使用默认值
    const ctxValue = {
        history: props.history,
        location: location,
        match: matchPath('/', location.pathname)
    }

    return <ctx.Provider value={ctxValue}>
        {props.children}
    </ctx.Provider>
}

Router.propTypes = {
    history: PropTypes.object.isRequired,
    children: PropTypes.node
}