import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// /a
function A() {
    return <h1>组件A</h1>
}
// /a/b
function B() {
    return <h1>组件B</h1>
}
// /a/c
function C() {
    return <h1>组件C</h1>
}
function NotFound() {
    return <h1>
        404 not found 
        <Route path="/abc" component={Child} />
    </h1>
}
function Child() {
    return <span style={{ color: '#f40' }}>child</span>
}

export default function App() {
    return (
        <Router>
            {/* 匹配到一个，后续就不再匹配 */}
            <Switch>
                <Route path="/a" component={A} />
                <Route path="/a/b" component={B} />
                <Route path="/a/c" component={C} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}