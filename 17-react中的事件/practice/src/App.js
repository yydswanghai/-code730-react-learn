import React from 'react'
import ReactDOM from 'react-dom';

/**
 * 1. 因为react组件里的事件，均是在document中处理的
 * 这里按钮点击的时候，先冒泡到root上执行真是的dom事件
 * 然后才到冒泡到document上执行react到事件
*/
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <div>
            <button onClick={() => {
                console.log('react 按钮被点击了')// 2
            }}>按钮</button>
        </div>
    )
}

document.querySelector('#root').onclick = function () {
    console.log('真实的dom事件：id为root的div被点击了')// 1
}