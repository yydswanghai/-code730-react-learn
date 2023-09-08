import { useLocation, useParams } from 'umi'

/**
 * 路由守卫：离开时清空
 */

export default function filex() {
    const params = useParams();
    const location = useLocation();

    return (
        <div>
            <p>pathname: {location.pathname}</p>
            <p>files: {JSON.stringify(params)}</p>
        </div>
    )
}
