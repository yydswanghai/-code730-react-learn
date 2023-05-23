import React, { Component } from 'react'
import Pager from './Pager'
import StudentList from './StudentList'
import Modal from './Modal'

function delay(duration = 1000) {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    })
}

export default class PageTest extends Component {
    state = {
        current: 1,
        total: 100,
        pageSize: 3,
        panelNumber: 5,
        students: [],
        isLoading: false
    }
    constructor(props){
        super(props)
        this.fetchStudents()
    }

    async fetchStudents(){
        // 这里会出警告
        this.setState({
            isLoading: true
        })
        await delay(2000)
        // const resp = await fetch(`http://api.duyiedu.com/api/student/findByPage?appkey=demo13_1545210570249&page=${this.state.current}&size=${this.state.limit}`)
        //     .then(resp => resp.json())
        //     .then(resp => resp.data);
        const stusData = [
            { id: '0001', name: '张三', sex: 1, birth: '2000-01-02' },
            { id: '0002', name: '李四', sex: 1, birth: '1999-03-08' },
            { id: '0003', name: '王武', sex: 1, birth: '1998-11-02' },
            { id: '0004', name: '赵云', sex: 1, birth: '1098-01-01' },
            { id: '0005', name: '红晶', sex: 0, birth: '1098-09-05' },
            { id: '0006', name: '甄宓', sex: 0, birth: '1098-10-05' },
            { id: '0007', name: '张三2', sex: 1, birth: '2000-01-02' },
            { id: '0008', name: '李四2', sex: 1, birth: '1999-03-08' },
            { id: '0009', name: '王武2', sex: 1, birth: '1998-11-02' }
        ]
        this.setState({
            total: 9,
            students: stusData,
            isLoading: false
        })
    }

    handlePageChange = (newPage) => {
        this.setState({
            current: newPage
        })
    }

    render() {
        return (
            <div className='container'>
                <StudentList stus={this.state.students} />
                <div className='pager'>
                    <Pager { ...this.state } onPageChange={this.handlePageChange} />
                </div>
                <Modal show={this.state.isLoading} />
            </div>
        )
    }
}
