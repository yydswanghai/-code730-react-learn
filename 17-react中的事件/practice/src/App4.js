import React from 'react'
import ReactDOM from 'react-dom';

/**
 * 有些第三方插件也会给document添加一些事件
 * 4.可以通过nativeEvent.stopImmediatePropagation()，阻止document上剩余事件的执行
 */

ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <div>
            <button onClick={(e) => {
                console.log('react 按钮被点击了')
                e.nativeEvent.stopImmediatePropagation();
            }}>按钮</button>
        </div>
    )
}
// 等同于运行冒泡到document时，阻止剩余的事件处理程序运行
// document.addEventListener('click', function (e) {
//     e.stopImmediatePropagation();
// })

document.addEventListener('click', function () {
    console.log('真实dom事件: document 被点击了')
})