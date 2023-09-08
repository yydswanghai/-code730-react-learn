import { useLocation, useParams, Navigate } from 'umi'

function User() {
    const params = useParams();
    const location = useLocation();
    return (
        <div>
            <p>pathname: {location.pathname}</p>
            <p>user: {params.id}</p>
        </div>
    )
}
/**
 * 高阶组件：封装用户时候鉴权通过
 */
const withAuth = (Comp: () => JSX.Element) => () => {
    const isLogin = Math.random() > 0.5;
    if(isLogin){
        return <Comp />
    }else{
        return <Navigate to="/" />
    }
}

export default withAuth(User)