import React from 'react'
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import './index.css'

const PageA = () => <h1>PageA</h1>;
const PageB = () => <h1>PageB</h1>;

function NavBar() {
    return <div>
        <NavLink to="/a" exact strict activeClassName="selected" activeStyle={{ background: '#eee' }}>nav-a</NavLink>
        <br/>
        <NavLink to={{
            pathname: '/b',
            hash: '#abc',
            search: '?a=1&b=2'
        }} replace innerRef={node => {
            console.log(node)
        }}>nav-b</NavLink>
    </div>
}

export default function Index() {
    return (
        <Router>
            <NavBar />
            <Route path="/a" component={PageA} />
            <Route path="/b" component={PageB} />
        </Router>
    )
}