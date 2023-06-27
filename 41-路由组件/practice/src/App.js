import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

// /a
function A() {
    return <h1>组件A</h1>
}
// /b
function B() {
    return <h1>组件B</h1>
}
// /c
function C() {
    return <h1>组件C</h1>
}

export default function App() {
    return (
        <Router>
            <Route path="/a" component={A} sensitive />
            <Route path="/b" component={B} />
            <Route path="/c" component={C} />
        </Router>
    )
}