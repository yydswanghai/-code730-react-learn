import { Form, useLoaderData, useNavigate } from 'react-router-dom'

export default function Edit() {
    let user = {}
    const res = useLoaderData();
    if(res.code === 200){
        user = res.data
    }
    const navigate = useNavigate()
    return (
        <Form method='post' className='edit'>
            <p>
                <span>Id</span>
                <input type="text" name="id" defaultValue={user.id} />
            </p>
            <p>
                <span>Name</span>
                <input type="text" name="name" defaultValue={user.name} />
            </p>
            <p>
                <span>Sex</span>
                <label><input type="radio" name="sex" defaultValue={0} />男</label>
                <label><input type="radio" name="sex" defaultValue={1} />女</label>
            </p>
            <p>
                <span>Age</span>
                <input type="text" name="age" defaultValue={user.age} />
            </p>
            <p>
                <span>Email</span>
                <input type="text" name="email" defaultValue={user.email} />
            </p>
            <p>
                <span>Birth</span>
                <input type="text" name="birth" defaultValue={user.birth} />
            </p>
            <p>
                <button type='submit'>Save</button>
                <button type='button' onClick={() => {
                    navigate(-1)
                }}>Cancel</button>
            </p>
        </Form>
    )
}
