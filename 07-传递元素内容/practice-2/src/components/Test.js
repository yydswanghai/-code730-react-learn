import React, { Component } from 'react'
import Modal from './Modal'
import ThreeLayout from './ThreeLayout'
import { vme50Text } from 'vme50'

export default class Test extends Component {
    state = {
        showModal: false
    }

    handleShowModal = () => {
        this.setState({
            showModal: true
        })
    }

    handleHideModal = () => {
        this.setState({
            showModal: false
        })
    }

    render() {
        return (
            <ThreeLayout gap={20}
                left={<h2 style={{border: '1px solid #008c8c'}}>left aside</h2>}
                right={<h2 style={{border: '1px solid #008c8c'}}>right aside</h2>}>
                <div style={{border: '1px solid #f40'}}>
                    <h2>main</h2>
                    {
                        this.state.showModal ?
                        (<Modal bg="rgba(0,0,0,.6)" onClose={this.handleHideModal}>
                            {vme50Text()}
                            <button onClick={this.handleHideModal}>关闭</button>
                        </Modal>)
                        : null
                    }
                    <button onClick={this.handleShowModal}>显示</button>
                </div>
            </ThreeLayout>
        )
    }
}
