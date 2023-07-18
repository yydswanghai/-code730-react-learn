import mock from 'mockjs'
import uses from './uses.json'

mock.setup({ timeout: '200-600' })

export async function getAllStudents() {
    return await uses
}

export async function getStudents({ pageIndex = 1, pageSize = 10, keyword = '', sex = -1 }) {
    const res = await getAllStudents()
    const all = res.data;
    let result = all;
    if(keyword){
        result = all.filter(it => it.name.includes(keyword))
    }
    if(sex !== -1){
        result = result.filter(it => it.sex === sex)
    }
    return {
        code: 200,
        data: result.slice((pageIndex-1)*pageSize, pageIndex*pageSize),
        msg: 'ok',
        pageIndex,
        pageSize,
        total: result.length
    }
}

export async function getStudent(id){
    const res = await getAllStudents()
    const all = res.data;
    const stu = all.find(it => it.id === id);
    return {
        code: 200,
        data: stu ? stu : null,
        msg: 'ok',
    }
}