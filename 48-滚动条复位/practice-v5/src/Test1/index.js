import React from 'react'
import '../index.css'
import * as Pages from './Pages'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import withScroll from './withScroll'

const PageWithScroll1 = withScroll(Pages.Page1);
const PageWithScroll2 = withScroll(Pages.Page2);

export default function App() {
    return (
        <Router>
            <div className='nav'>
                <Link to="/page1">Page1</Link>
                <br/>
                <Link to="/page2">Page2</Link>
            </div>
            <Route path="/page1" component={PageWithScroll1} />
            <Route path="/page2" component={PageWithScroll2} />
        </Router>
    )
}