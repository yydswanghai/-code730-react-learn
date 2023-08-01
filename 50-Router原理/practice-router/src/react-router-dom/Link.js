import React from 'react'
import { context } from '../react-router'
import { createLocationFormPath } from '../utils/myHistory'

export default function Link(props) {
    const { to, ...rest } = props;
    return (
        <context.Consumer>
            {ctx => {
                let _location;
                if(typeof props.to === 'object'){
                    _location = props.to;
                }else{// string类型
                    _location = createLocationFormPath(props.to);
                }
                const href = ctx.history.createHref(_location);
                return (<a {...rest} href={href} onClick={e => {
                    e.preventDefault();// 阻止默认事件
                    ctx.history.push(_location);
                }}>
                    {props.children}
                </a>)
            }}
        </context.Consumer>
    )
}
