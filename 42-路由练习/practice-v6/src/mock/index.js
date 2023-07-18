import mock from 'mockjs'
import uses from './uses.json'

mock.setup({ timeout: '200-600' })

const all = uses.data;

// 根据id获取
export async function getStudent(id){
    const stu = all.find(it => it.id === id);
    return {
        code: 200,
        data: stu ? stu : null,
        msg: 'ok',
    }
}
// 更新
export async function updateStudent(id, updates) {
    const stus = all.map(it => {
        if(it.id === +id){
            return updates
        }
        return it
    })
    return {
        code: 200,
        data: stus,
        msg: 'ok',
    }
}