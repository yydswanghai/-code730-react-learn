import React, { useState } from 'react'
import Prompt from './Prompt'

/**
 * 使用自己实现的Prompt
 */

export function Page1() {
    return (
        <div>
            <h3>Page1</h3>
        </div>
    )
}

export function Page2() {
    const [val, setVal] = useState('');

    return (
        <div>
            <h3>Page2</h3>
            <Prompt when={val !== ''} message="别乱来，会导致数据丢失，真的要跳转吗？" />
            <textarea value={val} onChange={e => {
                setVal(e.target.value)
            }}></textarea>
        </div>
    )
}