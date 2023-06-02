import React, { PureComponent } from 'react'

export default class ErrorBound2 extends PureComponent {

    state = {
        hasError: false,
        a: 123
    }

    static getDerivedStateFromError(error){
        console.log('发生错误了')
        return {
            hasError: true
        }
    }

    componentDidCatch(error, info){
        console.log('记录错误信息')
    }

    render() {
        // throw new Error('ErrorBound组件自身错误')

        // setTimeout(() => {
        //     throw new Error('异步错误')
        // }, 1000);
        if(this.state.hasError){
            return <h1>出现错误了！</h1>
        }
        return this.props.children
    }
}