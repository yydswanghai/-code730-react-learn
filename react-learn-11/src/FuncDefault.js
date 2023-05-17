import React from 'react'

export default function FuncDefault(props) {
    console.log(props);// 已经完成了混合
    return (
        <div>
            name: {props.name} age: {props.age} sex: {props.sex}
        </div>
    )
}
// 属性默认值
FuncDefault.defaultProps = {
    name: 'Matt',
    age: 18,
    sex: 1
}