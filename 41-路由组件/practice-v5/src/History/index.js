import React from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import Detail from './Detail'
import "./index.css"

function Nav(props) {
    return <ul>
        <li>
            <button onClick={() => {
                props.history.push('/detail', {
                    custom: { userId: 1000, userName: 'ww' }
                })
            }}>state 附带状态数据</button>
        </li>
        <li>
            <button onClick={() => {
                props.history.push('/detail?a=1&b=2#c=3&d=4')
            }}>search query+hash</button>
        </li>
        <li>
            <button onClick={() => {
                props.history.push('/detail/2023/6/20')
            }}>params /year/month/day</button>
        </li>
        <li>
            <button onClick={() => {
                props.history.push('/detail/2023')
            }}>params /year</button>
        </li>
        <li>
            <button onClick={() => {
                props.history.push('/detail/2023/6')
            }}>params /year/month</button>
        </li>
        <li>
            <button onClick={() => {
                props.history.push('/detail/2023/6/20/abc')
            }}>params /year/month/day/任意</button>
        </li>
    </ul>
}
const NavBar = withRouter(Nav)

export default function Index() {
    return (
        <Router>
            <NavBar />
            <Route
                path={[
                    "/detail",

                    // "/detail/:year(\d+)/:month(\d+)/:day(\d+)/*",// 必须是数字
                    "/detail/:year?/:month?/:day?",
                    "/detail/:year?/:month?/:day?/*"]}
                exact
                component={Detail}
            />
        </Router>
    )
}