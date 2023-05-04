import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'))

function handleClick(e) {
    console.log('点击了！！！', e)
}

const btn = <button onClick={handleClick} onMouseEnter={(e) => {
    console.log('鼠标移入了', e)
}}></button>

root.render(btn)