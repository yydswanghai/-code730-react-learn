import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import config from './routeConfig'

function User() {
    return <div>
        <h3>User组件固定的区域</h3>
        <p>
            <Link to={config.user.update}>用户信息</Link>
            <Link to={config.user.pay.index}>充值</Link>
        </p>
        <div style={{
            width: 500,
            height: 500,
            background: 'lightblue',
            border: '1px solid',
            margin: '0 auto'
        }}>
            <Route path={config.user.update} component={UserUpdate} />
            <Route path={config.user.pay.index} component={UserPay} />
        </div>
    </div>
}
const UserUpdate = () => <h3>修改用户信息</h3>;
const UserPay = () => <h3>用户充值</h3>;

export default function App() {
    return (
        <Router>
            <Route path={config.user.index} component={User} />
        </Router>
    )
}