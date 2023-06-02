import React, { PureComponent } from 'react'

export default class ErrorBound extends PureComponent {

    state = {
        hasError: false,
        a: 123
    }

    static getDerivedStateFromError(error){
        console.log('发生错误了')
        // 返回的对象会覆盖state
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log('记录错误信息')
    }

    render() {
        console.log(this.state)
        if(this.state.hasError){
            return <h1>出现错误了！</h1>
        }
        return this.props.children
    }
}