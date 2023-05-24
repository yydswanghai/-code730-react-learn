import React, { Component } from 'react'

export default class Comp3 extends Component {

    constructor(props){
        super(props);
        this.txt = React.createRef();
    }

    handleClick = () => {
        this.txt.current.focus()
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.txt} />
                <button onClick={this.handleClick}>聚焦</button>
            </div>
        )
    }
}
