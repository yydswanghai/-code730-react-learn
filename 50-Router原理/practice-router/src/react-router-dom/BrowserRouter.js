import { Router, createBrowserHistory } from '../react-router'

const history = createBrowserHistory()

export default function BrowserRouter(props) {
    return <Router history={history}>
        {props.children}
    </Router>
}