import React from 'react';
import ReactDOM from 'react-dom/client';
import StudentList from "./components/StudentList";
import { getStudentsList } from './mock'

const root = ReactDOM.createRoot(document.getElementById('root'))

const fetchData = async () => {
  const res = await getStudentsList();
  return res.data;
}

async function render(){
  root.render('...正在加载中')
  const stus = await fetchData();
  root.render(<StudentList stus={stus} />)
}
render()