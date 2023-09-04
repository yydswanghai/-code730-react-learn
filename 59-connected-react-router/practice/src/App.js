import React from 'react'
import { Switch, Route } from "react-router-dom";
import Login from './pages/Login'
import Admin from './pages/Admin'
import { ConnectedRouter } from 'connected-react-router'
import store from './store'
import history from './store/history'
import { Provider } from 'react-redux'

export default function App() {
    return (
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <>
                    <Switch>
                        <Route path="/login" exact component={Login} />
                        <Route path="/" component={Admin} />
                    </Switch>
                </>
            </ConnectedRouter>
        </Provider>
    )
}