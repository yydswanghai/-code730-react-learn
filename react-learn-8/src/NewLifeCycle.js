import React, { Component } from 'react'

export default class NewLifeCycle extends Component {
    constructor(props){
        super(props)
        this.state = {
            n: 0
        }
        console.log('%c:constructor', 'color: #409EFF;', '初始化.一个新的组件诞生了')
    }

    componentDidMount() {
        console.log('%c:componentDidMount', 'color: #F56C6C;', '挂载完成')
    }

    getSnapshotBeforeUpdate() {
        console.log('%c:getSnapshotBeforeUpdate', 'color: #409EFF;')
    //      return null;// 不改变当前状态
    //      return { n: props.n }// 用新的对象替换掉之前的状态
        return 123
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('%c:shouldComponentUpdate', 'color: #F56C6C;', '是否应该重新渲染', this.props, nextProps, this.state, nextState)
        if(this.props.n === nextProps.n && this.state.n === nextState.n){
            return false
        }
        return true
    }

    componentDidUpdate(prevProps, prevState, snap) {
        console.log('%c:componentDidUpdate', 'color: #409EFF;', snap)
    }

    componentWillUnmount() {
        console.log('%c:componentWillUnmount', 'color: #F56C6C;', '组件被销毁')
    }

    render() {
        console.log('%c:render', 'color: #F56C6C;', '渲染，返回的React元素会被挂在到虚拟DOM树中')
        return (
            <div>
                <h1>新版生命周期组件</h1>
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
