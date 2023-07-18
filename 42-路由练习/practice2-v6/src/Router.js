import { createBrowserRouter, redirect } from 'react-router-dom'
import Admin from './Pages/Admin'
import Contact from './Pages/Contact'
import ErrorPage from './Pages/ErrorPage'
import Edit from './Pages/Edit'
import Index from './Pages/Index'
import { destoryAction } from './Pages/Destroy'
import { getStudent, updateStudent } from './mock'

function delay(duration = 500) {
    return new Promise(resolve => setTimeout(resolve, duration))
}
async function contactLoader({ params }) {
    await delay()
    if(isNaN(+params.id)){
        throw new Response('' , {
            status: 404,
            statusText: '找不到'
        })
    }
    return await getStudent(+params.id)
}
async function editAction({ params, request }){
    const formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const res = await updateStudent(params.id, updates);
    console.log(res)
    return redirect(`/contact/${params.id}`)
}
async function searchLoader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get('q');
    return q
}
async function contactAction({ params, request }) {
    let formData = await request.formData();
    const updates = Object.fromEntries(formData);
    const res = await updateStudent(params.id, { ...updates, favorite: formData.get('favorite') === true });
    console.log(res)
    return res
}

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Admin />,
        errorElement: <ErrorPage />,
        loader: searchLoader,
        children: [
            {
                errorElement: <ErrorPage />,
                children: [{
                    index: true,// 当前匹配'/'，但是渲染的是Index
                    element: <Index />,
                },
                {
                    path: 'contact/:id',
                    element: <Contact />,
                    loader: contactLoader,// loader 加载数据
                    action: contactAction,
                },
                {
                    path: 'contact/:id/edit',
                    element: <Edit />,
                    loader: contactLoader,
                    action: editAction
                },
                {
                    path: 'contact/:id/destroy',
                    action: destoryAction,
                    errorElement: <div>删除页！自定义的错误显示</div>
                }]
            }
        ]
    }
])