import React, { Component } from 'react'
import withLog from './HOC/withLog'

class A extends Component {
    render(){
        return <h1>component A</h1>
    }
}

const ALog = withLog(A);

export default class App extends Component {

    myRef = React.createRef()

    componentDidMount(){
        console.log(this.myRef)
    }

    render() {
        return (
            <div className='app'>
                <ALog ref={this.myRef} />
            </div>
        )
    }
}
