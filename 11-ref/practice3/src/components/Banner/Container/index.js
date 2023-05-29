import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ImgContainer extends Component {

    static propTypes = {
        imgSrcs: PropTypes.arrayOf(PropTypes.string).isRequired,
        imgWidth: PropTypes.number.isRequired,
        imgHeight: PropTypes.number.isRequired,
        speed: PropTypes.number.isRequired// 在多长时间内完成动画切换
    }

    containerRef = el => {
        this.div = el;
    }

    // 计时器的间隔时间
    tick = 16
    timer = null;
    /**
     * 切换到第几张图片
     * 调用该函数，此组件会经过一段动画完成切换
     * @param {*} index 图片下标，从0开始
     */
    switchTo(index){
        if(index < 0){
            index = 0;
        }else if(index > this.props.imgSrcs.length - 1){
            index = this.props.imgSrcs.length - 1;
        }
        // 1.根据index，计算div的最终的marginLef
        const targetLeft = -index * this.props.imgWidth;
        // 2.得到当前的marginLeft
        let curLeft = parseFloat(getComputedStyle(this.div).marginLeft);
        // 3.计算运动的次数
        const times = Math.ceil(this.props.speed / this.tick);
        let curTimes = 0;// 当前运动的次数
        // 4.计算每次运动的距离
        const dis = (targetLeft - curLeft) / times;
        // 先停止之前的运动
        clearInterval(this.timer)
        this.timer = setInterval(() => {
            curTimes++;
            curLeft += dis;
            this.div.style.marginLeft = curLeft + 'px';
            if(curTimes === times){// 停止运动
                this.div.style.marginLeft = targetLeft + 'px';// 小数省略直接到最后
                clearInterval(this.timer);
            }
        }, this.tick);
    }

    render() {
        const imgs = this.props.imgSrcs.map((src, i) => <img key={i} src={src} alt="" style={{
            width: this.props.imgWidth,
            height: this.props.imgHeight,
            float: 'left'
        }} />)
        return (
            <div className='img-container'
                ref={this.containerRef}
                style={{
                    width: this.props.imgWidth * this.props.imgSrcs.length,
                    height: this.props.imgHeight,
                }}
                >
                {imgs}
            </div>
        )
    }
}
