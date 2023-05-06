import React, { Component } from 'react'
import Pager from './Pager'

export default class PageTest extends Component {
    state = {
        current: 1,
        total: 100,
        pageSize: 10,
        panelNumber: 5,
        students: [],
        isLoading: false
    }
    constructor(props){
        super(props)
    }

    handlePageChange = (newPage) => {
        this.setState({
            current: newPage
        })
    }

    render() {
        return (
            <Pager
                { ...this.state }
                onPageChange={this.handlePageChange}
            />
        )
    }
}
