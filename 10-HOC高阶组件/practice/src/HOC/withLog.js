import React, { Component } from 'react'

/**
 * 高阶组件:日志记录
 * @param Comp 组件
 */
export default function withLog(Comp, str){
    return class logWrapper extends Component {
        componentDidMount(){
            console.log(`日志：组件${Comp.name}被创建! ${Date.now()}`)
        }
        componentWillUnmount(){
            console.log(`日志：组件${Comp.name}被销毁! ${Date.now()}`)
        }
        render(){
            return (<>
                <h1>{str}</h1>
                <Comp {...this.props} />
            </>)
        }
    }
}
