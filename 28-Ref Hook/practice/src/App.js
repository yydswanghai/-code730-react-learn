import React, { useRef, useState } from 'react'

/**
 * 点击强制重新渲染
 * arr[0] === arr[2] // => true
 */

window.arr = []
export default function App() {
    const inpRef = useRef();// 用来固定该ref，避免不必要的重新创建
    window.arr.push(inpRef);
    const [, forceUpdate] = useState({});
    return (
        <div>
            <input type="text" ref={inpRef} />
            <button onClick={() => {
                console.log(inpRef.current)
            }}>得到input</button>
            <button onClick={() => forceUpdate({})}>强制重新渲染</button>
        </div>
    )
}
