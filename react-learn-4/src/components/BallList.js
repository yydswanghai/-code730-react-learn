import React, { Component } from 'react'
import { getRandom } from '../util'
import Ball from './Ball'

export default class BallList extends Component {
    constructor(props){
        super(props)
        this.state = {
            list: []
        }
        this.timer = setInterval(() => {
            const item = {
                left: getRandom(0, document.documentElement.clientWidth - 100),
                top: getRandom(0, document.documentElement.clientHeight - 100),
                xSpeed: getRandom(50, 500),
                ySpeed: getRandom(50, 500),
                bg: `rgb(${getRandom(0, 255)}, ${getRandom(0, 255)}, ${getRandom(0, 255)})`
            }
            this.setState({
                list: [...this.state.list, item]
            })
            if(this.state.list.length === 10){
                clearInterval(this.timer)
            }
        }, 1000)
    }  
    render() {
        const balls = this.state.list.map((item, idx) => (<Ball key={idx} {...item} />))
        return (
            <>
                {balls}
            </>
        )
    }
}
