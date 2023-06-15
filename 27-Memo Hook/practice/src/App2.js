import React, { useState } from 'react'
import { useMemo } from 'react';

function Item(props) {
    console.log('Item render ' + props.value)
    return <li>{props.value}</li>
}

export default function App() {
    const [range, ] = useState({ min: 1, max: 1000 });
    const [n, setN] = useState(0);

    // 只要range不变，不需要重新计算，React元素本身的引用没有发生变化
    // list的引用没变化，list中每个 <Item /> 引用也没变化
    const list = useMemo(() => {
        const list = [];
        for (let i = range.min; i <= range.max; i++) {
            list.push(<Item key={i} value={i} />)
        }
        return list;
    }, [range])
    return (
        <div>
            <ul>{list}</ul>
            {/* 文本框更新n，导致重新渲染，但是list又没必要重新去渲染 */}
            <input type="number" value={n} onChange={e => {
                setN(e.target.value)
            }} />
        </div>
    )
}
