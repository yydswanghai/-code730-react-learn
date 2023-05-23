import React from 'react';
import ReactDOM from 'react-dom/client';
import src1 from './assets/1.jpg'
import src2 from './assets/2.jpg'
import src3 from './assets/3.jpg'
import './index.css'

const srcs = [src1, src2, src3]
let index = 0;// 显示的图片索引
let timer;// 计时器

const rootDom = document.getElementById('root')
const root = ReactDOM.createRoot(rootDom)

function render() {
    root.render(
        <img src={srcs[index]} alt="" />
    );
}

function start() {
    stop()
    timer = setInterval(() => {
        index = (index + 1) % srcs.length
        render()
    }, 2000);
}

function stop() {
    clearInterval(timer)
}

render()
start()

rootDom.addEventListener('mouseenter', () => {
    console.log('停止')
    stop()
})
rootDom.addEventListener('mouseleave', () => {
    console.log('继续')
    start()
})