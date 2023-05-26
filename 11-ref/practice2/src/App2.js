import React, { Component } from 'react'

class A extends Component {
    render(){
        return <h1 ref={this.props.h1ref}>component A
            <span>{this.props.words}</span>
        </h1>
    }
}

// 如果是类组件，在外层套个函数组件
const NewA = React.forwardRef((props, ref) => <A {...props} h1ref={ref} />)

export default class App extends Component {
    /**
     * 情况：并不是想给A加ref，而是希望得到A里面的h1
     */
    ARef = React.createRef()

    componentDidMount(){
        console.log(this.ARef)
    }

    render() {
        return (
            <div className='app'>
                <NewA ref={this.ARef} words="aabb" />
            </div>
        )
    }
}
