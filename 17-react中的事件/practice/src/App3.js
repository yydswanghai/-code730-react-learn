import React from 'react'
import ReactDOM from 'react-dom';

/**
 * 3.stopPropagation，阻止事件在虚拟DOM树中冒泡
 */
ReactDOM.render(<App />, document.getElementById('root'));

function App() {
    return (
        <div onClick={() => {
            console.log('react div被点击')
        }}>
            <button onClick={(e) => {
                console.log('react 按钮被点击了')
                e.stopPropagation();
            }}>按钮</button>
        </div>
    )
}