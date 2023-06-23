import React, { useState } from 'react'
import FadeTransition from "./components/FadeTransition";
import { SwitchTransition, TransitionGroup } from "react-transition-group"
import { nanoid } from "nanoid";

export default function App() {
    const [show, setShow] = useState(true)
    const [list, setList] = useState([
        { id: nanoid(), name: '任务1' },
        { id: nanoid(), name: '任务2' },
        { id: nanoid(), name: '任务3' }
    ])
    const [inpValue, setInpValue] = useState('')

    return (
        <div>
            {/* 1.使用 */}
            <FadeTransition in={show} timeout={3000} appear>
                <h1>随便写点啥</h1>
            </FadeTransition>
            {/* 2.也可以套SwitchTransition使用，因为他本质上就是CSSTransition */}
            <SwitchTransition>
                <FadeTransition key={show} timeout={1000} appear>
                    <h1>{show ? '显示' : '隐藏'}</h1>
                </FadeTransition>
            </SwitchTransition>
            <button onClick={() => {
                setShow(!show)
            }}>淡入/淡出</button>
            {/* 3.也可以套TransitionGroup使用 */}
            <TransitionGroup component="ul">
                {
                    list.map(it => <FadeTransition key={it.id} appear>
                        <li>{it.name} <button onClick={() => {
                            setList(list.filter(li => li.id !== it.id))
                        }}>删除</button></li>
                    </FadeTransition>)
                }
            </TransitionGroup>
            <input type="text" value={inpValue} onChange={e => {
                setInpValue(e.target.value)
            }} />
            <button onClick={() => {
                setList([...list, { id: nanoid(), name: inpValue }])
            }}>添加任务</button>
        </div>
    )
}
