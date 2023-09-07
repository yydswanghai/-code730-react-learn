import React from 'react'
import { routerRedux, Switch, Route, NavLink } from './dva/router'
import Home from './Home'
import Counter from './Counter'

export default function ({ app, history }){
    return (<routerRedux.ConnectedRouter history={history}>
        <div>
            <ul>
                <li><NavLink to="/">首页</NavLink></li>
                <li><NavLink to="/counter">counter</NavLink></li>
            </ul>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/counter" component={Counter} exact />
            </Switch>
        </div>
    </routerRedux.ConnectedRouter>)
}