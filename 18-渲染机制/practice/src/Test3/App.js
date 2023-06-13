import React, { Component } from 'react'

/**
 * * 多个兄弟通过唯一标识（key）来确定对比的新节点
 * 1.没有加key时，你在账号密码里输入后，然后点击按钮更新，值不会清空
 * 因为<p>标签里的文本，<input> 节点类型都一致，所以重用了之前的dom
 *      var input1 = document.querySelector('#root > div > div > p > input')
 *      点击按钮
 *      var input2 = document.querySelector('#root > div > div > p > input')
 *      input1 === input2 // => true
 * 2.加key
 * <p>标签里的<input>还需要对比key时候相同，key不同则：没有找到对比的目标。
 * 创建新的节点，卸载多余的旧节点
 */

export default class App extends Component {
    state = {
        isReg : false
    }
    render() {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isReg: !this.state.isReg
                    })
                }}>登录/注册</button>
                {
                    this.state.isReg ?
                    (<div className='reg'>
                        <p>
                            账号：<input key="reg" type="text" />
                        </p>
                        <p>
                            密码：<input key="reg" type="password" />
                        </p>
                        <p>
                            确认密码：<input type="password" />
                        </p>
                        <p>
                            <button>注册</button>
                        </p>
                    </div>) :
                    (<div className='login'>
                        <p>
                            账号：<input key="login" type="text" />
                        </p>
                        <p>
                            密码：<input key="login" type="password" />
                        </p>
                        <p>
                            <button>登录</button>
                        </p>
                    </div>)
                }
            </div>
        )
    }
}
