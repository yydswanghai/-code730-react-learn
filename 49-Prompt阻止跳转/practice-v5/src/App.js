import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import * as Pages from './Pages2'
// import * as Pages from './Pages'

export default function App() {
    return (
        <Router getUserConfirmation={(msg, callback) => {
            callback(window.confirm(msg))
        }}>
            <div className='nav'>
                <NavLink to="/page1">页面1</NavLink>
                <NavLink to="/page2">页面2</NavLink>
            </div>
            <div className='container'>
                <Route path="/page1" component={Pages.Page1} />
                <Route path="/page2" component={Pages.Page2} />
            </div>
        </Router>
    )
}
