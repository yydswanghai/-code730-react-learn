import React, { Component } from 'react'
import types from 'prop-types'

export class A {}

export class B extends A {}

export default class ValidationComp extends Component {
    // 1.先混合属性
    static defaultProps = {
        bool: false
    }
    // 2.在调用相应的函数进行验证
    static propTypes = {
        num: types.number.isRequired,// 属性必须是一个数字类型,并且必填
        bool: types.bool.isRequired,// 属性必须是一个bool属性,并且必填
        onClick: types.func,// onClick必须是一个函数
        any: types.any,//1. 可以设置必填 2.阵型保持整齐（所有属性都在该对象中）
        node: types.node.isRequired,// 必填，而且必须是一个可以渲染的内容，字符串、数字、React元素
        element: types.element,// 属性必须是一个React元素
        elementType: types.elementType,// 属性必须是一个组件类型
        ins: types.instanceOf(A),// ins必须是A的实例
        sex: types.oneOf(['男', '女']),// 枚举：属性必须是数组当中的一个
        arrType1: types.arrayOf(types.number),// 数组的每一项必须满足类型要求
        objType: types.objectOf(types.number),// 每一个属性必须满足类型要求，要求值的类型，没啥用
        shape: types.shape({// 属性必须满足该对象的要求
            name: types.string.isRequired,
            age: types.number,
            address: types.shape({
                province: types.string,
                city: types.string,
            })
        }),
        arrType2: types.arrayOf(types.shape({
            name: types.string.isRequired,
            age: types.number.isRequired
        })),
        and: types.oneOfType([types.string, types.number]),// 合并类型：该属性可以是字符串也可以是数字
        score: function (props, propName, componentName){// 自定义
            // console.log(props, propName, componentName);
            const value = props[propName];
            // 必填
            if(value === undefined || value === null){
                return new Error(`验证失败的属性 ${propName} 在组件 ${componentName} 中, ${propName} 必须要传递的`)
            }
            // 数字
            if(typeof value !== 'number'){
                return new Error(`验证失败的属性 ${propName} 在组件 ${componentName} 中, ${propName} 的类型必须是number`)
            }
            if(value < 0 || value > 100){
                return new Error(`验证失败的属性 ${propName} 在组件 ${componentName} 中, ${propName} 的取值范围为 0 ~ 100`)
            }
        }
    }
    render() {
        const Comp = this.props.elementType
        return (
            <div>
                <Comp />
            </div>
        )
    }
}
