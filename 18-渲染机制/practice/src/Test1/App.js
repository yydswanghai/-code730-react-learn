import React, { Component } from 'react'
import ReactDOM from 'react-dom/client';

/**
 * 类组件的首次渲染机制
 */

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App />)

class Comp extends Component {
    state = {}
    constructor(props){
        super(props);
        console.log(4, 'Comp constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log(5, 'Comp getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){// 1.加入到执行队列
        console.log('b', 'Comp componentDidMount')
    }
    render(){
        console.log(6, 'Comp render')
        return (<h1>Comp</h1>)
    }
}

class App extends Component {
    state = {}
    constructor(props){
        super(props);
        console.log(1, 'App constructor')
    }
    static getDerivedStateFromProps(props, state){
        console.log(2, 'App getDerivedStateFromProps')
        return null;
    }
    componentDidMount(){// 2.加入到执行队列
        console.log('a', 'App componentDidMount')
    }
    render() {
        console.log(3, 'App render')
        return (
            <div className='app'>
                <Comp />
            </div>
        )
    }
}