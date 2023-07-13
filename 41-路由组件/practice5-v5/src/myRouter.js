import { Route, Switch, Link } from 'react-router-dom'
import RouteConfig from './routeConfig'

/**
 * 根据一个路由配置数组，生成一个对应的嵌套数据，并处理path
 */
function generateRouteMap(routes, basePath, level = 1) {
    if(!Array.isArray(routes)){
        return null;
    }
    return routes.map(item => {
        const { children, path, ...rest } = item;
        let newPath = basePath + path;
        if(level > 1){
            if(path.startsWith('/')){
                throw new Error(`path=${item.path} component=${item.component.name} 子路由不能以"/"作为开头`)
            }
            newPath = basePath + (path ? '/' + path : path);
        }
        const newRoute = {
            ...rest,
            path: newPath,
        }
        if(children){
            newRoute.children = generateRouteMap(children, newPath, level+1)
        }
        return newRoute
    })
}
/**
 * 得到一组Route组件
 * 子RouterView通过 props.children 显示
 */
function getRoutes(routes) {
    if(!routes) return null
    return routes.map((rt, i) => {
        const { children, path, name, component: Component, ...rest } = rt;
        return (<Route key={i} {...rest}
                path={path}
                render={ctx => {
                    return <Component {...ctx}>
                        {getRoutes(children)}
                    </Component>
                }}
            />)
    })
}
/**
 * 使用Route组件，根据不同的路径，渲染顶级页面
 */
export function RouterView() {
    const rs = getRoutes(generateRouteMap(RouteConfig, ""))
    return <Switch>
        {rs}
    </Switch>
}
/**
 * 扁平化数据格式
 */
function getFillRoutes(routes) {
    const newArr = [];
    function _fill(routes) {
        routes.forEach(rt => {
            if(rt.children){
                _fill(rt.children);
            }
            newArr.push(rt);
        })
    }
    _fill(routes)
    return newArr.map(({children, ...rest}) => {
        return rest;
    })
}
export function BetterLink({ to, ...rest }) {
    const rs = getFillRoutes(generateRouteMap(RouteConfig, ""));
    if(to.name && typeof to !== 'string'){
        const cur = rs.find(it => it.name === to.name);
        to.pathname = cur ? cur.path : null
    }
    return <Link {...rest} to={to} />
}