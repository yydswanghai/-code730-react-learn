import React, { Component } from 'react'

function A(props, ref) {
    return <h1 ref={ref}>component A
        <span>{props.words}</span>
    </h1>
}
// 传递函数组件A，得到一个新组件NewA
const NewA = React.forwardRef(A)

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
