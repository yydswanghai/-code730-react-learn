import React, { Component } from 'react'

/**
 * 点击更新，每一次的key都不同，每一次都没有对比目标，所以每次都创建新加入的节点
 */

class CompA extends Component {
    componentDidMount() {
        console.log("CompA 新建")
    }
    componentWillUnmount() {
        console.log("CompA 卸载")
    }
    render() {
        return <h1>CompA</h1>
    }
}

export default class App extends Component {
    state = {
        visible: true
    }
    render() {
        return (
            <div>
                <CompA key={Math.random()} />
                <button onClick={() => {
                    this.setState({})
                }}>点击更新</button>
            </div>
        )
    }
}
