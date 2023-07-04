import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

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
    return <h1>404 not found</h1>
}

export default function App() {
    return (
        <Router>
            <Route path="/a" component={A} exact />
            <Route path="/a/b" component={B} exact />
            <Route path="/a/c" component={C} exact />
            <Route component={NotFound} />
        </Router>
    )
}