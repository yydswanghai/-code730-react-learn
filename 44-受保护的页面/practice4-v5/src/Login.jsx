import loginInfo from './loginInfo'
import qs from 'query-string'

export default function Login(props) {
    return (
        <div>
            <h3>登录</h3>
            <p>该页面仅作为测试，点击下方按钮即可登录</p>
            <button onClick={() => {
                loginInfo.login();
                // 1.
                const query = qs.parse(props.location.search);
                if(query.returnurl){
                    props.history.push(query.returnurl)
                }else{
                    props.history.push('/')
                }
                // 2.
                if(props.location.state){
                    props.history.push(props.location.state)
                }else{
                    props.history.push('/')
                }
            }}>登录</button>
        </div>
    )
}
