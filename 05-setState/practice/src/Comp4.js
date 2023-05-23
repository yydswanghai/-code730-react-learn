import React, { Component } from 'react'
/**
 * 最佳实践
 */
export default class Comp4 extends Component {
    state = {
        n: 0
    }

    handleClick = () => {
        this.setState(cur => {
            return {
                n: cur.n + 1
            }
        }, () => {
            // 所有状态全部更新完成，并且重新渲染后执行
            console.log('state更新完成', this.state.n);
        });
        this.setState(cur => ({
            n: cur.n + 1
        }))
        this.setState(cur => ({
            n: cur.n + 1
        }))
    }

    render() {
        console.log('render')
        return (
            <div>
                <h1>{this.state.n}</h1>
                <p>
                    <button onClick={this.handleClick}>+</button>
                </p>
            </div>
        )
    }
}
