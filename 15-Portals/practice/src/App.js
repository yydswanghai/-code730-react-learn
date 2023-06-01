import React from 'react'
import { createPortal } from 'react-dom'

/**
 * 在react元素结构上，依然是 App => ChildA => ChildB
 * 但是我想把 ChildA 放在 class='modal' 的dom元素里渲染
 */

function ChildA() {
    // 使用 React.createPortal()
    return createPortal(<div className='child-a' style={{ marginTop: 200 }}>
    <h2>childA</h2>
    <ChildB />
</div>, document.querySelector('.modal'))
}

function ChildB() {
    return <div className='child-b'>
        <h3>child-b</h3>
    </div>
}

export default function App() {
    return (
        <div className='app' onClick={e => {
            console.log('App被点击了', e.target)
        }}>
            <h1>App</h1>
            <ChildA />
        </div>
    )
}
