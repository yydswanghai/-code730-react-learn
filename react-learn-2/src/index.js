import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentList from "./components/StudentList";

const rootDom = document.getElementById('root')
const root = ReactDOM.createRoot(rootDom)

const appkey = 'demo13_1545210570249'
async function fetchAllStudents(){
  const stus = await fetch('http://api.duyiedu.com/api/student/findAll?appkey=' + appkey)
  .then(resp => resp.json()).then(resp => resp.data)
  return stus
}
async function render(){
  root.render('...正在加载中')
  const stus = await fetchAllStudents();
  root.render(<StudentList stus={stus} />)
}
render()