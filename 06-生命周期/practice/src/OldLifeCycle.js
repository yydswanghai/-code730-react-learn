import React, { Component } from 'react'

export default class OldLifeCycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            n: 0
        }
        console.log('%c:constructor', 'color: #409EFF;', '初始化.一个新的组件诞生了')
    }

    componentWillMount() {
        console.log('%c:componentWillMount', 'color: #E6A23C;', '组件即将被挂载')
    }

    componentDidMount() {
        console.log('%c:componentDidMount', 'color: #F56C6C;', '挂载完成')
    }

    componentWillReceiveProps(nextProps){
        console.log('%c:componentWillReceiveProps', 'color: #E6A23C;', '接收到新的属性值', this.props, nextProps)
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('%c:shouldComponentUpdate', 'color: #F56C6C;', '是否应该重新渲染', this.props, nextProps, this.state, nextState)
        if(this.props.n === nextProps.n && this.state.n === nextState.n){
            return false
        }
        return true
    }

    componentWillUpdate(nextProps, nextState) {
        console.log('%c:componentWillUpdate', 'color: #E6A23C;', '组件即将被重新渲染')
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('%c:componentDidUpdate', 'color: #409EFF;', '组件已完成重新渲染', prevProps, prevState)
    }

    componentWillUnmount() {
        console.log('%c:componentWillUnmount', 'color: #F56C6C;', '组件被销毁')
    }

    render() {
        console.log('%c:render', 'color: #F56C6C;', '渲染，返回的React元素会被挂在到虚拟DOM树中')
        return (
            <div>
                <h1>旧版生命周期组件</h1>
                <h2>属性n: {this.props.n}</h2>
                <h2>状态n: {this.state.n}</h2>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}>状态n+1</button>
            </div>
        )
    }
}
