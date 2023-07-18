import React from 'react'
import { BrowserRouter as Router, Route, Switch ,Link } from 'react-router-dom'
import Login from './Login'
import Home from './Home'
import Personal from './Personal'
import ProtectedRoute from './ProtectedRoute'

export default function App() {
    return (
        <Router>
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/login">去登录</Link></li>
                <li><Link to="/personal">个人中心</Link></li>
            </ul>
            <Switch>
                <Route path="/login" component={Login} />
                <ProtectedRoute path="/personal" component={Personal} />
                <Route path="/" component={Home} />
            </Switch>
        </Router>
    )
}
