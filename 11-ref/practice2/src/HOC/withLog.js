import React, { Component } from 'react'

/**
 * 高阶组件:日志记录
 * @param Comp 组件
 */
export default function withLog(Comp){
    class LogWrapper extends Component {
        componentDidMount(){
            console.log(`日志：组件${Comp.name}被创建! ${Date.now()}`)
        }
        componentWillUnmount(){
            console.log(`日志：组件${Comp.name}被销毁! ${Date.now()}`)
        }
        render(){
            const { forwardRef, ...rest } = this.props;
            return (<>
                <Comp ref={forwardRef} {...rest} />
            </>)
        }
    }
    // 让使用该高阶组件的ref指向Comp而不是LogWrapper
    return React.forwardRef((props, ref) => {
        return <LogWrapper {...props} forwardRef={ref} />
    })
}