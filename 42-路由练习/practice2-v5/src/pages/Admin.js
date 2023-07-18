import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Menu from '../components/Menu'
import Index from './Index'
import Dashboard from './Dashboard'
import Sales from './Sales'
import DataList from './DataList'
import Detail from './DataList/Detail'

export default function Admin() {
    return (
        <Layout
            header={<Header/>}
            aside={<><Aside/><Menu /></>}>
            <Switch>
                <Route path="/" exact component={Index} />
                <Route path="/dashboard" component={Dashboard} />
                <Route path="/listdata" exact component={DataList} />
                <Route path="/listdata/:id" exact component={Detail} />
                <Route path="/sales" component={Sales} />
            </Switch>
        </Layout>
    )
}