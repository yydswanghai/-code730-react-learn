import React, { Component } from 'react'
import NumberInput from './NumberInput'

export default class FormTest extends Component {

    state = {
        val: '123',
        loves: ['足球', '篮球', '音乐', '其他'],
        chooseLoves: ['篮球', '音乐'],
        selVal: 'beijing'
    }

    render() {
        const checkboxes = this.state.loves.map(it => (
            <label key={it}>
                <input
                    type="checkbox"
                    checked={this.state.chooseLoves.includes(it)}
                    onChange={e => {
                        if(e.target.checked){// 选中
                            this.setState({
                                chooseLoves: [...this.state.chooseLoves, it]
                            })
                        }else{
                            this.setState({
                                chooseLoves: this.state.chooseLoves.filter(item => item !== it)
                            })
                        }
                    }}
                />
                {it}
            </label>
        ))
        return (
            <div>
                <button onClick={() => console.log(this.state)}>获取选中的值</button>
                <p>
                    {/* 默认情况下，它是一个非受控组件 */}
                    {/* <input type="text" /> */}
                    输入框：<input type="text" value={this.state.val} onChange={e => {
                        this.setState({
                            val: e.target.value
                        })
                    }} />
                </p>
                <p>
                    数字输入框：<NumberInput  />
                </p>
                <p>
                    多选框：{checkboxes}
                </p>
                <p>
                    下拉列表：<select value={this.state.selVal} onChange={e => {
                        this.setState({
                            selVal: e.target.value
                        })
                    }}>
                        <option value="beijing">北京</option>
                        <option value="guangzhou">广州</option>
                        <option value="shanghai">上海</option>
                    </select>
                </p>
            </div>
        )
    }
}
