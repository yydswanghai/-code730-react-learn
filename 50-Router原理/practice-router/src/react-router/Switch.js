import React from 'react'
import matchPath from '../utils/matchPath'
import context from './context'
import Route from './Route'

export default function Switch(props) {
    function getMatchChild(ctx) {
        let children = [];
        if(Array.isArray(props.children)){
            children = props.children;
        }else if(typeof props.children === 'object'){
            children = [props.children];
        }
        for (const child of children) {
            if(child.type !== Route){
                throw new Error('Switch 里必须是 Route');
            }
            const { path = '/', exact = false, strict = false, sensitive = false } = child.props;
            const match = matchPath(path, ctx.location.pathname, { exact, strict, sensitive });
            if(match){// 匹配到了
                return child;
            }
        }
    }
    return <context.Consumer>
        {getMatchChild}
    </context.Consumer>
};