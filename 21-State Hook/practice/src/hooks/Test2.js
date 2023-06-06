import React, { useState } from 'react'

/**
 * useState运行原理
 * 在当前React节点(type=function App)，当前React节点内部会维护一个状态表格(数组)
 * 调用该函数，即App()
 *  1.第n次调用useState
 *  2.检查该React节点的状态表格，是否存在下标n
 *    如果不存在
 *      1.使用默认值创建一个状态
 *      2.将该状态加入到状态表格中，下标为n
 *    如果存在
 *      1.忽略掉默认值
 *      2.直接得到状态值
 * * useState严禁出现在代码块（判断、循环）中
 * ! 错误演示
 * 打印'Test2 render'
 * 第一次运行1处代码，状态表格中下标0的位置添加状态值: true（默认值）
 * 第一次运行2处代码，判断为真
 * 第一次运行3处代码，状态表格中下标1的位置添加状态值: 0（默认值）
 * 第一次运行4处代码，状态表格中下标2的位置添加状态值: 10（默认值）
 * 点击按钮后，状态表格中下标为0的状态从true 更新为 false，导致重新渲染
 * 打印'Test2 render'
 * 第二次运行1处代码，状态表格中存在下标0，并且当前状态为 false，visible状态为: false
 * 第二次运行2处代码，判断为假
 * 第二次运行4处代码，看状态表格下标1位置，将状态0赋值给a，这就导致状态不对应，出现问题！！！
 */

export default function Test2() {
    console.log('Test2 render');
    const [visible, setVisible] = useState(true);// 1
    if(visible){// 2
        const [n, setN] = useState(0);// 3
    }
    const [a, setA] = useState(10);// 4

    return (
        <div>
            <button onClick={() => {
                setVisible(!visible)
            }}>显示/隐藏</button>
        </div>
    )
}
