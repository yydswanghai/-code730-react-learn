import { useRouteError } from 'react-router-dom'

export default function ErrorPage() {
    const error = useRouteError()
    console.log(error)
    return <div>
        <h1>Oops!</h1>
        <p>404 not found <i style={{ color: '#f40' }}>{error.statusText || error.message}</i></p>
    </div>
}