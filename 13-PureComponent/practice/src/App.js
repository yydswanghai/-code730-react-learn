import React from 'react'
// import TaskContainer from './components/question/TaskContainer'
// import TaskContainer from './components/notPureComp/TaskContainer'
import TaskContainer from './components/PureComp/TaskContainer'

/**
 * ? 问题目录 => /components/question/*
 * 问题: 所有的组件一共渲染了多少次?
 * App: 1次，因为是一个函数组件，而且没有属性，不会发生属性变化
 * TaskContainer: 2次，第一次tasks状态，数组长度为0，第二次tasks状态被重新设置，数组长度为10
 * TaskList: 2次，该组件只有属性，并且属性来自于父组件
 * TaskAdd: 2次，父组件的重新渲染导致了他渲染两次，第二次是完全没必要的渲染
 * Task: 10次，在TaskContainer第一次tasks数据长度为0时，不会去渲染，第二次有数据后一次性渲染了10次
 * 问题: 新增一个任务会导致Task重新渲染11次
 * 其中10次是上一次渲染过的数据，也是完全没必要去重复渲染，只有第11次是新增的一个任务，他是相当于第一次渲染的第11个Task
 * * 解决方式一目录 => /components/notPureComp/*
 * * 解决方式二目录 => /components/PureComp/*
 */

export default function App() {
    console.log('App render')
    return (
        <div className='app'>
            <TaskContainer />
        </div>
    )
}
