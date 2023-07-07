import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const A = () => (<h1>组件A</h1>);
const B = () => (<h1>组件B</h1>);
const C = () => (<h1>组件C</h1>);
const NotFound = () => (<h1>404 not found</h1>);

export default function index() {
    return (
        <Router>
            {/* 区分大小写匹配 => /A */}
            <Route path="/A" component={A} sensitive />
            {/* 精确匹配 => /a 或 /a/ */}
            <Route path="/a" component={B} exact />
            {/* 精确+严格匹配 => 仅 /a */}
            <Route path="/a" component={C} exact strict />
            <Route path="/always" component={A}>
                <h3>一定会显示的内容</h3>
            </Route>
            <Route path="/always/b" component={A} exact>
                {() => (<div><h3>一定会显示的内容2</h3></div>)}
            </Route>
            <Route component={NotFound} />
        </Router>
    )
}