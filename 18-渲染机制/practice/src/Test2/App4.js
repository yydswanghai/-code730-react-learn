import React, { Component } from 'react'

/**
 * 4. 节点类型不一致的情况，组件类型不一样
 * -1.第一次渲染
 * 渲染CompB，render() 未执行完
 * 渲染CompBChild，render() 执行完
 * CompBChild的 componentDidMount() 添加到队列
 * CompB的 render() 执行完毕，CompB的 componentDidMount() 添加到队列
 * 运行cdm执行队列：[CompBChild, CompB]
 * -2.点击按钮更新
 * 重新运行App render()，返回的是<CompA />，节点类型不一致
 * 进去卸载创建流程，先创建
 * 渲染CompA，render() 未执行完
 * 渲染CompAChild，render() 执行完
 * CompAChild的 componentDidMount() 添加到队列
 * CompA的 render() 执行完毕，CompA的 componentDidMount() 添加到队列
 * cdm执行队列：[CompAChild, CompA]
 * 卸载CompB，运行CompB的 componentWillUnmount
 * 卸载CompBChild，运行CompBChild的 componentWillUnmount
 * 卸载完毕后，开始挂载新的DOM节点
 * 再运行cdm执行队列
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
        return <CompAChild />
    }
}
class CompAChild extends Component {
    componentDidMount(){
        console.log('CompAChild 新组件挂载')
    }
    componentWillUnmount(){
        console.log('CompAChild 卸载')
    }
    render(){
        console.log('CompAChild render')
        return null
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
        return <CompBChild />
    }
}
class CompBChild extends Component {
    componentDidMount(){
        console.log('CompBChild 新组件挂载')
    }
    componentWillUnmount(){
        console.log('CompBChild 卸载')
    }
    render(){
        console.log('CompBChild render')
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