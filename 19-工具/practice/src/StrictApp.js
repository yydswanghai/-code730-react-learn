import React, { Component } from 'react'

export default class Mode extends Component {
    render(){
        return (
            <React.StrictMode>
                <App />
            </React.StrictMode>
        )
    }
}

class App extends Component {

    // 过时的 context API
    static childContextTypes = {}
    getChildContext(){}

    constructor(props){
        super(props)
        // 严格模式下，不允许副作用的生命周期内，检测不到你的代码，但是会故意调用两次（该构造函数）
        console.log('调用constructor')
        setTimeout(() => {
            console.log('hello')
        }, 3000);
    }

    // 识别不安全的生命周期
    componentWillMount(){
        console.log('使用了不合适的生命周期')
    }

    render() {
        return (
            // 使用过时字符串 ref API
            <div ref="divRef">

            </div>
        )
    }
}
