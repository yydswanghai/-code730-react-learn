import { useEffect } from 'react'
import { withRouter } from 'react-router-dom'

/**
 * 实现Prompt
 * 无渲染，当when改变时，运行handleBlock添加阻塞
 */

let unBlock;
function Prompt(props) {
    const handleBlock = () => {
        if(props.when){
            unBlock = props.history.block(props.message);
        }else{
            unBlock && unBlock();
        }
    }

    useEffect(() => {
        handleBlock();
        return () => {
            unBlock && unBlock();
        }
    }, [props.when])

    return null
}

// 属性默认值
Prompt.defaultProps = {
    when: false,// 当when为true时候，添加阻塞
    message: '' // 当阻塞时，跳转页面则提示消息
}

export default withRouter(Prompt)