import React from 'react'
import * as Pages from './Pages'
import { BrowserRouter as Router } from 'react-router-dom'
import TrsitionRoute from './TrsitionRoute'

export default function App() {
    return (
        <Router>
            <Pages.NavBar />
            <div className='page-container'>
                <TrsitionRoute path="/" component={Pages.Home} exact />
                <TrsitionRoute path="/news" component={Pages.News} exact
                    enter="animate__bounceInDown" exit="animate__bounceOutUp" />
                <TrsitionRoute path="/personal" component={Pages.Personal} exact />
            </div>
        </Router>
    )
}
