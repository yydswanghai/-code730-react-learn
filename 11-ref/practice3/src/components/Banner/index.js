import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import ImgContainer from './Container'
import Arrow from './Arrow'

export default class Banner extends Component {

    static defaultProps = {
        width: 520,
        height: 280,
        imgSrcs: [],
        duration: 3000,
        speed: 500
    }

    static propTypes = {
        width: PropTypes.number.isRequired,// 容器宽度
        height: PropTypes.number.isRequired,// 容器高度
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,// 图片路径
        duration: PropTypes.number.isRequired,// 自动切换的间隔时间
        speed: PropTypes.number.isRequired,// 完成一次切换需要的时间
    }

    imgContainerRef = el => {
        this.container = el;
    }

    handleChangeArrow = type => {
        console.log(type)
    }

    render() {
        return (
            <>
                <div className="banner" style={{
                    width: this.props.width,
                    height: this.props.height
                }}>
                    <ImgContainer
                        ref={this.imgContainerRef}
                        imgSrcs={this.props.imgSrcs}
                        imgWidth={this.props.width}
                        imgHeight={this.props.height}
                        speed={this.props.speed}
                    />
                    <Arrow onChange={this.handleChangeArrow}/>
                </div>
                <button onClick={() => {
                    this.container.switchTo(2)
                }}>switchto2</button>
                <button onClick={() => {
                    this.container.switchTo(3)
                }}>switchto3</button>
            </>
        )
    }
}
