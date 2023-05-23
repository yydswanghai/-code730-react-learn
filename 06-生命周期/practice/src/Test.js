import React, { Component } from 'react'

/**
 * componentWillReceiveProps 被删除的原因是，React认为很多开发者不会用，乱用，导致一些bug
 * getDerivedStateFromProps 的出现没什么实际意义，主要是为了替换componentWillReceiveProps，并且是静态的，没有this
 */
export default class Test extends Component {
    state = {
        n: this.props.n
    }

    componentWillReceiveProps(nextProps){
        // 这里会导致你的数据n 的来源不再是单一的，有可能来自状态，也有可能来自属性，与官方的理论相违背
        this.setState({
            n: nextProps.n
        })
    }

    // static getDerivedStateFromProps(){
        
    // }

    render() {
        return (
            <div>
                <h1>数字：{this.state.n}</h1>
                <button onClick={() => {
                    this.setState({
                        n: this.state.n + 1
                    })
                }}>n+1</button>
            </div>
        )
    }
}
