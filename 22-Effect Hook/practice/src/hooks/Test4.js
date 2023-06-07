import React, { useState, useEffect } from 'react'

/**
 * ? 副作用函数中，如果使用了函数上下文中的变量，则由于闭包的影响，会导致副作用函数中变量不会实时变化
 * 1.第一次渲染：useEffect里的n指向Test4里的变量n
 * 当Test4函数运行完后，由于闭包的影响，导致上下文还存在，所以useEffect里的n指向的是上下文中的n
 * 2.点击按钮后重新渲染，又重新运行一个新的Test4函数，
 * useEffect也是一个新的副作用函数，在新Test4运行完后，因闭包保存了新Test4函数上下文，
 * 这里新上下文里的n就跟之前上下文里的n没有任何关系了，是各自独立的上下文
 */

export default function Test4() {
    const [n, setN] = useState(0);
    useEffect(() => {
        setTimeout(() => {
            console.log(n);// n指向，当前Test4函数调用时的n
        }, 5000);
    })
    return (
        <div>
            <h1>{n}</h1>
            <button onClick={() => {
                setN(n + 1)
            }}>n+1</button>
        </div>
    )
}
