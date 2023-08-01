import React from 'react'
import context from './context'

export default function withRouter(Comp) {
    function RouterWrapper(props) {
        return <context.Consumer>
            {ctx => <Comp {...ctx} {...props} />}
        </context.Consumer>
    }
    // 设置组件在调试工具中显示的名字
    RouterWrapper.displayName = `withRouter(${Comp.displayName || Comp.name})`
    return RouterWrapper
}