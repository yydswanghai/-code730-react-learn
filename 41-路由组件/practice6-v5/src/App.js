import React from 'react'
import { Link, Route } from 'react-router-dom'
import RouterGroup from './RouterGroup'

const PageA = () => <h3>PageA</h3>;
const PageB = () => <h3>PageB</h3>;

export default function App() {
    return (
        <div>
            <RouterGroup
                onBeforeChange={(prevLocation, curLocation, action, callback, unBlock) => {
                    callback(true)
                    console.log(`阻塞 => 从${prevLocation.pathname}跳转到${curLocation.pathname} 方式为：${action}`)
                    unBlock();// 取消阻塞，仅阻塞一次
                }}
                onChange={(prevLocation, curLocation, action, unListen) => {
                    console.log(`监听 => 从${prevLocation.pathname}跳转到${curLocation.pathname} 方式为：${action}`)
                    unListen();// 取消监听，仅监听一次
                }}
            >
                <ul>
                    <li><Link to="/PageA">pageA</Link></li>
                    <li><Link to="/PageB">pageB</Link></li>
                </ul>
                <Route path="/PageA" component={PageA} />
                <Route path="/PageB" component={PageB} />
            </RouterGroup>
        </div>
    )
}