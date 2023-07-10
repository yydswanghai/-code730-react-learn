import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import Link from './Link'

const PageA = () => <h1>PageA</h1>;
const PageB = () => <h1>PageB</h1>;

function NavBar() {
    return <div>
        <Link to="/a">nav-a</Link>
        <br/>
        <Link to={{
            pathname: '/b',
            hash: '#abc',
            search: '?a=1&b=2'
        }} replace innerRef={node => {
            console.log(node)
        }}>nav-b</Link>
    </div>
}

export default function App() {
    return (
        <Router>
            <NavBar />
            <Route path="/a" component={PageA} />
            <Route path="/b" component={PageB} />
        </Router>
    )
}
