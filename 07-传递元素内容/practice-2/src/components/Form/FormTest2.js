import React, { Component } from 'react'

export default class FormTest extends Component {

    state = {
        loginId: '',
        logindPwd: '',
        sex: 'male',
        chooseLoves: [],
        loves: [
            { value: 'football', text: '足球' },
            { value: 'basketball', text: '篮球' },
            { value: 'music', text: '音乐' },
            { value: 'other', text: '其他' },
        ],
        city: 'beijing'
    }

    handleChange = (e) => {
        let val = e.target.value;// 读取表单的值
        let name = e.target.name;// 读取表单的name属性
        if(e.target.type === 'checkbox'){// 多选特殊处理
            if(e.target.checked){
                val = [...this.state.chooseLoves, val]
            }else{
                val = this.state.chooseLoves.filter(it => it !== val)
            }
        }
        this.setState({
            [name]: val
        })
    }

    getLoveCheckBoxes(){
        return this.state.loves.map(it => (
            <label key={it.value}>
                <input type="checkbox" name="chooseLoves"
                    value={it.value}
                    checked={this.state.chooseLoves.includes(it.value)}
                    onChange={this.handleChange}
                />
                {it.text}
            </label>
        ))
    }

    render() {
        const bs = this.getLoveCheckBoxes();
        return (
            <div>
                <button onClick={() => console.log(this.state)}>获取选中的值</button>
                <p>
                    <input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange} />
                </p>
                <p>
                    <input type="password" name="logindPwd" value={this.state.logindPwd} onChange={this.handleChange} />
                </p>
                <p>
                    <label>
                        <input type="radio" name="sex" value="male" checked={this.state.sex === 'male'} onChange={this.handleChange} />
                        男
                    </label>
                    <label>
                        <input type="radio" name="sex" value="female" checked={this.state.sex === 'female'} onChange={this.handleChange} />
                        女
                    </label>
                </p>
                <p>
                    {bs}
                </p>
                <p>
                    <select name="city" value={this.state.city} onChange={this.handleChange}>
                        <option value="beijing">北京</option>
                        <option value="guangzhou">广州</option>
                        <option value="shanghai">上海</option>
                    </select>
                </p>
            </div>
        )
    }
}
