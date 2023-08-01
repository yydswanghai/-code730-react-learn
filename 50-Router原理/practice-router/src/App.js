import React from 'react'
import { BrowserRouter as Router, Route, Switch } from './react-router-dom'

const Page1 = () => <h1>page1</h1>
const Page2 = () => <h1>page2</h1>

export default function App() {
    return <Router>
        <Switch>
            <Route path="/page1" component={Page1} exact />
            <Route path="/page1" component={Page1} />
            <Route path="/page2" component={Page2} />
        </Switch>
    </Router>
}