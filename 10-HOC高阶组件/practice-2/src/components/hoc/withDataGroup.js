import React, { Component } from 'react'
import commonTypes from '../commonTypes'

/**
 * 实现根据数据渲染出的一组表单组件
 */
export default function withDataGroup(Comp) {
    return class DataGroupWrapper extends Component {
        static defaultProps = {
            datas: []
        }

        static propTypes = {
            datas: commonTypes.groupDatas
        }

        render() {
            const comps = this.props.datas.map(it => <Comp key={it.value} info={it} {...this.props} />)
            return (
                <>
                    {comps}
                </>
            )
        }
    }
}
