import React from 'react'
import ReactDOM from 'react-dom';

/**
 * 6.不冒泡的事件，特殊的事件react就是在该元素上监听的
 */

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <div onClick={() => {
            console.log('react div被点击了')
        }}>
            <input type="text" onFocus={() => {
                console.log('react 文本获得焦点')
            }} />
        </div>
    )
}

document.querySelector('#root').onfocus = function (e) {
    console.log('阻止focus事件冒泡')
    e.stopPropagation()
}