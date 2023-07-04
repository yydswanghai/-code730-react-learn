import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Menu from '../components/Menu'
import Home from './Home'
import Dashboard from './Dashboard'
import DataList from './DataList'
import Sales from './Sales'
import Detail from './Detail'

export default function Admin() {
    return (
        <Layout
            header={<Header/>}
            aside={<><Aside/><Menu /></>}>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/listdata" exact component={DataList} />
                <Route path="/listdata/:id" exact component={Detail} />
                <Route path="/sales" component={Sales} />
            </Switch>
        </Layout>
    )
}