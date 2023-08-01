import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from './react-router-dom'
import "./App.css"

const Page1 = () => <h1>page1</h1>
const Page2 = () => <h1>page2</h1>

export default function App() {
    return <Router>
        {/* ul>li*2>Link[to="/page$"]>{跳转到页面$} */}
        <ul>
            <li>
                <NavLink to={{
                    pathname: '/page1',
                    search: '?name=ab&age=18',
                    hash: '#a=1',
                    state: { sta: 'a' }
                }}>跳转到页面1</NavLink>
            </li>
            <li>
                <NavLink to="/page2">跳转到页面2</NavLink>
            </li>
        </ul>
        <Route path="/page1" component={Page1} exact />
        <Route path="/page2" component={Page2} />
    </Router>
}