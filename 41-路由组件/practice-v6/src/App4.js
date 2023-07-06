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
function NotFound() {
    return <h1>404 not found</h1>
}

export default function App() {
    return (
        <Router>
            <Route path="/a" component={A} exact>
                {() => {
                    return <div>
                        <h3>一定会显示的内容</h3>
                        <p>dadfbbbdabdq</p>
                    </div>
                }}
            </Route>
            <Route path="/a/b" component={B} />
            <Route component={NotFound} />
        </Router>
    )
}