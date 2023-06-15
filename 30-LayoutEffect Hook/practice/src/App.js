import React, { useState, useRef, useEffect } from 'react'

export default function App() {
    const [n, setN] = useState(0);
    const nref = useRef();
    useEffect(() => {
        nref.current.innerText = Math.random().toFixed(2)
    })

    return (
        <div>
            <p ref={nref}>{n}</p>
            <button onClick={() => {
                setN(n + 1)
            }}>+</button>
        </div>
    )
}