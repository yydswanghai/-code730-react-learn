import React, { useState } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import { nanoid } from 'nanoid'
import './index.css'

export default function Test() {
    const [list, setList] = useState([
        { id: nanoid(), name: '任务1' },
        { id: nanoid(), name: '任务2' },
    ])

    return (
        <div>
            <TransitionGroup appear component={null}>
                {
                    list.map(it => <CSSTransition key={it.id} timeout={3000}>
                        <div>{it.name} <button onClick={() => {
                            setList(list.filter(li => li.id !== it.id))
                        }}>删除</button></div>
                    </CSSTransition>)
                }
            </TransitionGroup>
            <button onClick={() => {
                var name = window.prompt('请输入任务名称')
                setList([...list, { id: nanoid(), name }])
            }}>添加</button>
        </div>
    )
}