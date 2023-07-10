import React from 'react'
import { BrowserRouter as Router, Route, Switch, NavLink, Redirect } from 'react-router-dom'

const PageA = () => <h1>PageA</h1>;
const PageB = () => <h1>PageB</h1>;

function NavBar() {
    return <div>
        <NavLink to="/a" exact strict activeStyle={{ background: '#eee' }}>nav-a</NavLink>
        <br/>
        <NavLink to="/b">nav-b</NavLink>
        <br/>
        <NavLink to="/abc/1">other</NavLink>
    </div>
}

export default function Index() {
    return (
        <Router>
            <NavBar />
            <Switch>
                <Route path="/a" component={PageA} />
                <Route path="/b" component={PageB} />
                <Redirect from="/abc/:id" to="/a/:id" />
            </Switch>
        </Router>
    )
}