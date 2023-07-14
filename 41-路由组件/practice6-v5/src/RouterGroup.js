import React, { useEffect, useMemo } from 'react'
import { BrowserRouter as Router, withRouter } from "react-router-dom"

// 全局，上一次location, 本次location, 方式, 取消阻塞函数, 取消监听函数
let prevLocation, location, action, unBlock, unListen;

// 不生成任何元素，仅为了获取上下文
function _GuardHelper(props) {
    prevLocation = props.location;
    // 添加阻塞，阻塞只能加一个，在getUserConfirmation之前运行
    unBlock = useMemo(() => {
        return props.history.block((newLocation, newAction) => {
            location = newLocation;
            action = newAction;
            return '';
        })
    }, []);
    // 添加一个监听
    unListen = useMemo(() => {
        return props.history.listen((newLocation, newAction) => {
            props.onChange && props.onChange(prevLocation, location, action, unListen)
        })
    },[]);

    useEffect(() => {
        return () => {
            unBlock();// 取消阻塞
            unListen();// 取消监听
        }
    }, [])
    return null;
}

const GuardHelper = withRouter(_GuardHelper);

function RouterGroup(props) {
    // 只要发生阻塞就会调用此函数
    const handleConfirmation = (msg, callback) => {
        if(props.onBeforeChange){
            props.onBeforeChange(prevLocation, location, action, callback, unBlock)
        }else{
            callback(true)
        }
    }
    return <Router getUserConfirmation={handleConfirmation}>
        <GuardHelper onChange={props.onChange} />
        {props.children}
    </Router>
}

export default RouterGroup