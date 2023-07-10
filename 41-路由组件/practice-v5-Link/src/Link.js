import React from 'react'
import { withRouter } from 'react-router-dom'

/* 实现Link */
function Link(props) {
    return (
        <a href={props.to} onClick={e => {
            e.preventDefault();// 阻止<a/>的默认事件
            props.history.push(props.to);
        }}>
            {props.children}
        </a>
    )
}

export default withRouter(Link)