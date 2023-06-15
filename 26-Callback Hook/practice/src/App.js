import React, { useState } from 'react'

class Test extends React.PureComponent {
    render(){
        console.log('Test render')
        return <div>
            <h1>{this.props.text}</h1>
            <button onClick={this.props.onClick}>改变文本</button>
        </div>
    }
}
/**
 * ?问题 这里在input输入后更新，会发现 Parent和Test组件都更新了？
 * 因为，虽然txt没变，但是 onClick函数改变了，每次更新都会生成一个新的 onClick函数（地址变了）
 */
function Parent() {
    console.log('Parent render')
    const [txt, setTxt] = useState(123);
    const [n, setN] = useState(0);
    return <div>
        {/* 函数的地址每次渲染都发生了变化，导致了子组件跟着重新渲染，若子组件是经过优化的组件，则可能导致优化失效 */}
        <Test text={txt} onClick={() => {
            setTxt(123)
        }} />
        <input type="text" value={n} onChange={e => {
            setN(e.target.value)
        }} />
    </div>
}

export default function App() {
    return (
        <div>
            <Parent />
        </div>
    )
}