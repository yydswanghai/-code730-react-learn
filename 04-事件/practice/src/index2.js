import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))

function handleClick(e) {
    console.log('点击了！！！', e)
}
/**
 * <button></button> 是react给你封装好的一个基础组件，直接使用onClick会在合适的时候触发
 */

const btn = <button onClick={handleClick} onMouseEnter={(e) => {
    console.log('鼠标移入了', e)
}}></button>

root.render(btn)