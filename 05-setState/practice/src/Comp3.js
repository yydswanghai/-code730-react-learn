import React, { Component } from 'react'

export default class Comp3 extends Component {
    state = {
        n: 0
    }

    // constructor(props){
    //     super(props)
    //     setInterval(() => {
    //         this.setState({
    //             n: this.state.n + 1
    //         });

    //         this.setState({
    //             n: this.state.n + 1
    //         });

    //         this.setState({
    //             n: this.state.n + 1
    //         });
    //     }, 1000);
    // }

    /* 这里异步的setState，React会将多次setState合并，
       多次状态改变完后再统一对state进行改变，触发一次render */
    handleClick = () => {
        // this.setState({
        //     n: this.state.n + 1
        // });
        // this.setState({
        //     n: this.state.n + 1
        // });
        // this.setState({
        //     n: this.state.n + 1
        // });

        /* 如果你想每运行setState后运行一次render()，使用回调，在回调里再继续setState
           这里每次点击，就会运行三次render() */
        this.setState({
            n: this.state.n + 1
        }, () => {
            this.setState({
                n: this.state.n + 1
            }, () => {
                this.setState({
                    n: this.state.n + 1
                }, () => {
                    console.log('state更新完成', this.state.n);
                })
            })
        });
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
