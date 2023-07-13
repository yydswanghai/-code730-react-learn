import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import loginInfo from './loginInfo'

/**
 * 授权路由
 * 利用Route的render属性来渲染组件，但是要防止使用者传递，component、children、render属性替换了渲染
 * render参数：Router上下文
 * render返回：需要渲染的组件
 * render和children的区别：render是匹配后才会运行，children无论是否匹配都会运行
 */

export default function ProtectedRoute({ component: Component, children, render, ...rest }) {
    return <Route {...rest} render={values => {
        if(loginInfo.isLogin){
            return <Component />
        }else{
            // 1.使用地址栏传递需要返回的页面
            // return <Redirect to={{
            //     pathname: '/login',
            //     search: '?returnurl=' + values.location.pathname
            // }} />
            // 2.使用history的状态
            return <Redirect to={{
                pathname: '/login',
                state: values.location.pathname
            }} />
        }
    }} />
}
