import { increase, decrease, asyncIncrease, asyncDecrease } from './store/action/counter'
import { connect } from 'react-redux'

// 展示组件
function Counter(props) {
    return (
        <div>
            <h1>{props.number}</h1>
            <p>
                <button onClick={props.onAsyncDecrease}>异步减</button>
                <button onClick={props.onAsyncIncrease}>异步加</button>
                <button onClick={props.onDecrease}>减</button>
                <button onClick={props.onIncrease}>加</button>
            </p>
        </div>
    )
}
// 辅助函数：映射仓库里的 counter数据
function mapStateToProps(state) {
    return {
        number: state.counter
    }
}
// 辅助函数：映射仓库里的 action操作
function mapDispatchToProps(dispatch) {
    return {
        onIncrease(){
            dispatch(increase())
        },
        onDecrease(){
            dispatch(decrease())
        },
        onAsyncIncrease(){
            dispatch(asyncIncrease())
        },
        onAsyncDecrease(){
            dispatch(asyncDecrease())
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)