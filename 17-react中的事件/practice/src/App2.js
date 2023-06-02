import React from 'react'
import ReactDOM from 'react-dom';

/**
 * 2. 如果真实的DOM事件，阻止了事件冒泡，会导致react事件无法触发
 * 通过React的事件中阻止事件冒泡，无法阻止真实的DOM事件冒泡
 */
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <div>
            <button onClick={(e) => {
                console.log('react 按钮被点击了')// 2
                // e.stopPropagation();
                // 注意：这样也不行，这只会阻止原生的事件冒泡
                // e.nativeEvent.stopPropagation()
            }}>按钮</button>
        </div>
    )
}

document.querySelector("#root").onclick = function (e) {
    console.log('真实的dom事件：id为root的div被点击了');// 1
    e.stopPropagation();
}