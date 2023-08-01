import { createBrowserHistory } from '../utils/myHistory'
import { Router } from '../react-router'
import React from 'react'

const history = createBrowserHistory()

export default function BrowserRouter(props) {
    return <Router history={history}>
        {props.children}
    </Router>
}