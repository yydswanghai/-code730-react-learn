import { useLoaderData, Form, useFetcher } from 'react-router-dom'

export default function Contact() {
    let user = {
        id: 0,
        name: 'Your Name',
        sex: 0,
        age: 18,
        email: '123456@123.com',
        birth: '2023-01-01 10:12',
        favorite: true
    }
    // 获取路由里loader加载的数据
    const res = useLoaderData();
    if(res.code === 200){
        user = Object.assign({}, user, res.data)
    }

    const fetcher = useFetcher();
    return (
        <>
            <ul>
                <li>【编号】&ldquo; &rdquo; {user.id}</li>
                <li>【姓名】{user.name}</li>
                <li>【性别】{user.sex === 0 ? '男' : '女'}</li>
                <li>【年龄】{user.age}</li>
                <li>【邮箱】{user.email}</li>
                <li>【出生日期】{user.birth}</li>
            </ul>
            <fetcher.Form method='post'>
                <button name='favorite' aria-label={user.favorite ? 'remove' : 'add'}
                    value={user.favorite ? 'false': 'true'}>
                    {user.favorite ? "★" : "☆"}
                </button>
            </fetcher.Form>
            <Form action='edit'>
                <button type='submit'>Edit</button>
            </Form>
            <Form method='post' action='destroy'>
                <button type='submit'>Destroy</button>
            </Form>
        </>
    )
}
