import React, { Component } from 'react'
import resetScroll from '../resetScroll'

export default function withScroll(Comp) {
    return class ScrollWrapper extends Component {
        componentDidMount(){
            resetScroll()
        }

        render(){
            return <Comp {...this.props} />
        }
    }
}