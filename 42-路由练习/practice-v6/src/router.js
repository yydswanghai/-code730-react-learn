import { createBrowserRouter } from 'react-router-dom'
import Login from './Pages/Login'
import Admin from './Pages/Admin'
import Index from './Pages/Index'
import Dashboard from './Pages/Dashboard'
import Sales from './Pages/Sales'
import DataList from './Pages/DataList'
import Detail from './Pages/DataList/Detail'
import ErrorPage from './Pages/ErrorPage'

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Admin />,
        errorElement: <ErrorPage />,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [{
                    index: true,// 当前匹配'/'，但是渲染的是Index
                    element: <Index />,
                },
                {
                    path: 'dashboard',
                    element: <Dashboard />,
                },
                {
                    path: 'listdata',
                    element: <DataList />,
                },
                {
                    path: 'listdata/:id',
                    element: <Detail />,
                },
                {
                    path: 'sales',
                    element: <Sales />,
                }]
            }
        ]
    },
    {
        path: '/login',
        element: <Login />,
        errorElement: <ErrorPage />,
    }
])