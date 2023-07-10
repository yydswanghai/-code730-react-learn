import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const A = () => (<h1>组件A</h1>);
const B = () => (<h1>组件B</h1>);
const C = () => (<h1>组件C</h1>);
const Child = () => (<span style={{ color: '#f40' }}>child</span>);
const NotFound = () => (<h1>
    404 not found
    <Route path="/abc" component={Child} />
</h1>);

export default function Index() {
    return (
        <Router>
            {/* Switch 匹配到一个，后续就不再匹配 */}
            <Switch>
                <Route path="/a" component={A} exact />
                <Route path="/a/b" component={B} />
                <Route path="/a/c" component={C} />
                <Route component={NotFound} />
            </Switch>
        </Router>
    )
}