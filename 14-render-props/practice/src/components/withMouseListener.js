import React, { PureComponent } from 'react'
import "./style.css"

export default function withMouseListener(Comp) {
    return class MouseListener extends PureComponent {
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
                <div ref={this.divRef} className='point hoc' onMouseMove={this.handleMouseMove}>
                    <Comp {...this.props} x={this.state.x} y={this.state.y} />
                </div>
            )
        }
    }
}
