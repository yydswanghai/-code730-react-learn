import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './index.css'
import ImgContainer from './Container'
import Arrow from './Arrow'
import Dot from './Dot'
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

    state = {
        currentIndex: 0// 当前显示第几张
    }

    timer = null;
    componentDidMount(){
        this.autoSwitch()
    }
    componentWillUnmount(){
        clearInterval(this.timer)
    }
    /**
     * 自动切换
     */
    autoSwitch(){
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            let cur = this.state.currentIndex;
            cur = (cur + 1) % this.props.imgSrcs.length;
            this.handleSwitch(cur);
        }, this.props.duration);
    }

    imgContainerRef = el => {
        this.container = el;
    }

    handleChangeArrow = type => {
        let cur = this.state.currentIndex;
        if(type === 'left'){
            cur--;
            if(cur < 0){
                cur = this.props.imgSrcs.length - 1;
            }
        }else{
            cur++;
            if(cur > this.props.imgSrcs.length - 1){
                cur = 0;
            }
        }
        this.handleSwitch(cur);
    }
    handleChangeDot = (index) => {
        if(index === this.state.currentIndex){
            return;
        }
        this.handleSwitch(index)
    }
    /**
     * 切换到
     */
    handleSwitch = index => {
        this.setState({
            currentIndex: index
        })
        this.container.switchTo(index)
    }

    render() {
        return (
            <div className="banner" style={{
                width: this.props.width,
                height: this.props.height
            }}
                onMouseEnter={() => {
                    clearInterval(this.timer)
                }}
                onMouseLeave={() => {
                    this.autoSwitch()
                }}
                >
                <ImgContainer
                    ref={this.imgContainerRef}
                    imgSrcs={this.props.imgSrcs}
                    imgWidth={this.props.width}
                    imgHeight={this.props.height}
                    speed={this.props.speed}
                />
                <Arrow onChange={this.handleChangeArrow}/>
                <Dot
                    total={this.props.imgSrcs.length}
                    curIndex={this.state.currentIndex}
                    onChange={this.handleChangeDot}
                    />
            </div>
        )
    }
}
