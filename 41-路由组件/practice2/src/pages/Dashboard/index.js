import React from 'react'

export default function Dashboard(props) {
    return (
        <>
            <div>Dashboard</div>
            <div>
                <p>tips: 路由信息传递</p>
                <button onClick={() => {
                    props.history.push('/login', {
                        custom: { userId: 1000, userName: 'ww' }
                    })
                }}>state</button>
                <button onClick={() => {
                    props.history.push('/login?a=1&b=2#c=3&d=4')
                }}>search</button>
            </div>
            <div>
                {/* 使用params */}
                <button onClick={() => {
                    props.history.push('/login/2023/6/20')
                }}>params</button>
                <button onClick={() => {
                    props.history.push('/login/2023')
                }}>仅year</button>
                <button onClick={() => {
                    props.history.push('/login/2023/6')
                }}>仅year和month</button>
                <button onClick={() => {
                    props.history.push('/login/2023/6/20/abc')
                }}>任意</button>
            </div>
        </>
    )
}
