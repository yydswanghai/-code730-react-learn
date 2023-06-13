import React, { Component } from 'react'

/**
 * 3. 节点类型不一致的情况
 * 如果是类组件:
 *  1. 直接放弃该节点
 *  2. 调用该节点的 componentWillUnMount 函数
 *  3. 递归卸载子节点
 */

class CompA extends Component {
    state = {
        a: 123,
        b: 'abc'
    }
    componentDidMount(){
        console.log('CompA componentDidMount')
    }
    render(){
        if(this.state.a === 123){
            return (<>
                <button onClick={() => {
                    this.setState({
                        a: 321,
                        b: 'CBA'
                    })
                }}>点击</button>
                <CompC n={this.props.b} />
            </>)
        }
        return (
            <div>
                <h1>{this.state.a}</h1>
                <CompB n={this.state.b} />
                
            </div>
        )
    }
}

function CompB(props) {
    return (
        <div>
            <h1 id="title">{props.n}</h1>
            <CompC n={props.n} />
        </div>
    )
}

class CompC extends Component {
    componentWillUnmount(){
        console.log('CompC componentWillUnmount')
    }
    render(){
        return (
            <div>
                <h1>{this.props.n}</h1>
            </div>
        )
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <CompA />
            </div>
        )
    }
}