import React, { PureComponent } from 'react'
import "./style.css"

/**
 * 该组件用于监听鼠标的变化
 */
export default class MouseListener extends PureComponent {

    state = {
        x: 0,
        y: 0
    }

    divRef = React.createRef()

    handleMouseMove = (e) => {
        const { left, top } = this.divRef.current.getBoundingClientRect();
        const x = e.clientX - left;// 相对容器point的x位置
        const y = e.clientY - top;// 相对容器point的y位置
        this.setState({
            x,
            y
        })
    }

    render() {
        return (
            <div ref={this.divRef} className='point render-props' onMouseMove={this.handleMouseMove}>
                {/* {this.props.children(this.state)} */}
                {this.props.render ? this.props.render(this.state) : '默认值'}
            </div>
        )
    }
}
