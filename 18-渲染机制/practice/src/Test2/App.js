import React, { Component } from 'react'

/**
 * 1. 节点类型一致的情况
 * 点击按钮，节点更新
 * 直接重用之前的真实DOM对象，验证：
 *      1. var div1 = document.querySelector('#root>div>div')
 *      2. 点击按钮更新
 *      3. var div2 = document.querySelector('#root>div>div')
 *      4. div1 === div2 // => true
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
        return (
            <div>
                <h1>{this.state.a}</h1>
                <CompB n={this.state.b} />
                <button onClick={() => {
                    this.setState({
                        a: 321,
                        b: 'CBA'
                    })
                }}>点击</button>
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
    componentDidUpdate(prevProps, prevState){
        console.log('CompC componentDidUpdate')
    }
    render(){
        // 此时真实dom还没有添加到页面，必须是虚拟dom树全部加载完后才生成真实dom，所以第一次渲染为null
        var title = document.getElementById('title');
        if(title){
            // 点击按钮更新，输出的是abc，却不是CBA？
            // 也必须是虚拟dom树全部更新完后，才更新真实dom
            console.log(title.innerHTML)
        }else{
            console.log(title)
        }
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