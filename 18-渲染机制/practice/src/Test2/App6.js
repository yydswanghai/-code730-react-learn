import React, { Component } from 'react'

/**
 * ?问题：1处的div和2处的div在更新后是同一个dom对象吗？，3处的button和4处的button是同一个dom对象吗？
 * 是的，节点类型一致
 *  var div1 = document.querySelector('#root>div')
 *  var btn1 = document.querySelector('#root>div>button')
 *  点击按钮
 *  var div2 = document.querySelector('#root>div')
 *  var btn2 = document.querySelector('#root>div>button')
 *  div1 === div2 // => true
 *  btn1 === btn2 // => true
 */

export default class App extends Component {
    state = {
        n: 1
    }
    render() {
        if(this.state.n === 1){
            return (
                <div>{/* 1 */}
                    <button onClick={() => { {/* 3 */}
                        this.setState({
                            n: 0
                        })
                    }}>点击</button>
                </div>
            )
        }
        return (
            <div>{/* 2 */}
                <button onClick={() => { {/* 4 */}
                    this.setState({
                        n: 1
                    })
                }}>点击</button>
            </div>
        )
    }
}
