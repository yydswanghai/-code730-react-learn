import { useLocation, useParams } from 'umi'

export default function detail() {
    const params = useParams();
    const location = useLocation();
    return (
        <div>
            <p>pathname: {location.pathname}</p>
            <p>detail: {params.id}</p>
        </div>
    )
}
