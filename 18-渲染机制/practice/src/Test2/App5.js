import React, { Component } from 'react'

/**
 * 5. 节点类型不一致的情况，组件类型不一样
 * ? 点击按钮更新后，会不会再次调用CompB的构造函数？也就是说CompB时候有被重用？
 * 点击后，依然会运行 'CompB 新组件挂载'，因为节点类型不是，会创建全新的节点
 */

class CompA extends Component {
    componentDidMount(){
        console.log('CompA 新组件挂载')
    }
    componentWillUnmount(){
        console.log('CompA 卸载')
    }
    render(){
        console.log('CompA render')
        return <CompB />
    }
}
class CompB extends Component {
    componentDidMount(){
        console.log('CompB 新组件挂载')
    }
    componentWillUnmount(){
        console.log('CompB 卸载')
    }
    render(){
        console.log('CompB render')
        return null
    }
}

export default class App extends Component {
    state = {
        n: 0
    }
    render() {
        if(this.state.n === 0){
            return (<div>
                <CompB />
                <button onClick={() => {
                    this.setState({
                        n: 1
                    })
                }}>点击</button>
            </div>)
        }
        return (
            <CompA />
        )
    }
}