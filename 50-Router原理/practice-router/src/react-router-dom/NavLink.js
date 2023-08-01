import React from 'react'
import { context } from '../react-router'
import Link from './Link'
import matchPath from '../utils/matchPath'
import { createLocationFormPath } from '../utils/myHistory'

export default function NavLink(props) {
    const { activeClass = 'active', exact, strict, sensitive, ...rest } = props;
    return <context.Consumer>
        {ctx => {
            let _location = props.to;
            if(typeof props.to === 'string'){
                _location = createLocationFormPath(props.to);
            }
            const match = matchPath(_location.pathname, ctx.location.pathname, { exact, strict, sensitive });
            if(match){
                return <Link {...rest} className={activeClass} />
            }
            return <Link {...rest} />
        }}
    </context.Consumer>
}