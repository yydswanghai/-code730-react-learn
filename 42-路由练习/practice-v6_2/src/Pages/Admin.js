import React from 'react'
import { Outlet } from 'react-router-dom'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Aside from '../components/Aside'
import Menu from '../components/Menu'

export default function Admin() {
    return (
        <Layout
            header={<Header/>}
            aside={<><Aside /><Menu /></>}>
            {/* 告诉根路由我们希望它在哪里呈现其子路由 */}
            <Outlet />
        </Layout>
    )
}