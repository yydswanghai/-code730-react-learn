import React, { Component } from 'react'
import Banner from './index'
import src1 from '../../assets/1.jpg'
import src2 from '../../assets/2.jpg'
import src3 from '../../assets/3.jpg'
import src4 from '../../assets/4.jpg'
import src5 from '../../assets/5.jpg'

export default class Test extends Component {
    render() {
        return (
            <>
                <Banner imgSrcs={[src1, src2, src3, src4, src5]} />
            </>
        )
    }
}