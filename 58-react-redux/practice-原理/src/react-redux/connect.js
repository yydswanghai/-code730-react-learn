import React, { useContext, useState } from 'react'
import ctx from './ctx'
import { useEffect } from 'react';
import { bindActionCreators } from 'redux'

// 浅比较两个对象里的值，相等返回true
function compare(obj1, obj2) {
    for (const key in obj1) {
        if(obj1[key] !== obj2[key]){
            return false;
        }
    }
    return true;
}

/**
 * @param {(state) => stateObject} mapStateToProps
 * @param {(dispatch, props) => handleObject | handleObject} mapDispatchToProps
 */
export default function (mapStateToProps, mapDispatchToProps) {
    /* 返回一个高阶组件 */
    return function (Comp) {
        // 对于Temp组件，只有它需要（依赖）的数据发送变化时，才重新渲染
        function Temp(props) {
            const store = useContext(ctx);
            const [state, setState] = useState(mapStateToProps && mapStateToProps(store.getState()));

            useEffect(() => {
                return store.subscribe(() => {
                    let newState = mapStateToProps && mapStateToProps(store.getState());
                    // 效率优化，注意这里不要直接使用useEffect hook外的state，
                    setState(curState => {
                        if(compare(curState, newState)){
                            return curState;
                        }else{
                            return newState;
                        }
                    });
                })
            }, [])
            function getEventhandles() {
                if(typeof mapDispatchToProps === 'function'){
                    return mapDispatchToProps(store.dispatch, props);
                }else if(typeof mapDispatchToProps === 'object'){
                    return bindActionCreators(mapDispatchToProps, store.dispatch);
                }
            }
            let handles = {};
            if(mapDispatchToProps){
                handles = getEventhandles();
            }
            console.log(`${Comp.name} 重新渲染了`)
            return <Comp {...state} {...handles} {...props} />
        }
        Temp.displayName = Comp.displayName || Comp.name;
        return Temp
    }
}