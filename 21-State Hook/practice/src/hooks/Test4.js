import React, { useState } from 'react'

/**
 * 使用更新函数改变数据，传入的值不会和原来的数据进行合并，而是直接替换。
 */

export default function Test4() {
    console.log('Test4 render')
    const [data, setData] = useState({
        x: 1,
        y: 2
    })
    return (
        <div>
            <p>
                x: {data.x} y: {data.y}
            </p>
            {/* <button onClick={() => {
                setData({
                    x: data.x + 1
                })
            }}>x+1</button> */}
            <button onClick={() => {
                setData({
                    ...data,
                    x: data.x + 1
                })
            }}>x+1</button>
        </div>
    )
}