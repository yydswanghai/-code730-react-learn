import React from 'react'
import ctx from './context'
import matchPath from '../utils/matchPath'

/**
 * Route (匹配路由，把路由的结果放在上下文中)，要消费上下文，并且再提供一个上下文供子组件用
 * 因为 Route 除了match对象与上下文里的不同，其他都与 Router 一样
 * @param {string|string[]} path 匹配路径
 * @param {node|(value)=>node} children 无论是否匹配都，渲染子元素
 * @param {(value) => node} render 匹配成功后，渲染函数
 * @param {node} component 匹配成功后，渲染组件
 * @param {boolean} exact matchPath的配置对象，默认是false
 * @param {boolean} strict matchPath的配置对象，默认是false
 * @param {boolean} sensitive matchPath的配置对象，默认是false
 */

/**
 * 在上下文提供者内部渲染的内容
 */
function renderChildren(_ctx, _props) {
    // children有值
    if(![undefined, null].includes(_props.children)){
        if(typeof _props.children === 'function'){
            return _props.children(_ctx);// 函数就直接运行
        }
        return _props.children;
    }
    // children没有值
    if(!_ctx.match){// 没有匹配上
        return null;
    }
    // 匹配上 render有值
    if(typeof _props.render === 'function'){
        return _props.render(_ctx);
    }
    // 只有component有值
    if(_props.component){
        const Component = _props.component;
        return <Component {..._ctx} />
    }
    return null;
}
export default function Route(props) {

    return <ctx.Consumer>
        {context => {
            const ctxValue = {
                history: context.history,
                location: context.location,
                match: matchPath(props.path, context.location.pathname, {
                    exact: props.exact,
                    sensitive: props.sensitive,
                    strict: props.strict
                })
            };
            return <ctx.Provider value={ctxValue}>
                {renderChildren(ctxValue, props)}
            </ctx.Provider>
        }}
    </ctx.Consumer>
}
Route.defaultProps = {
    path: '/'// 不写path就是使用默认的'/'
}