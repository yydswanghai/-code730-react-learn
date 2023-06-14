import mock from 'mockjs'

mock.setup({ timeout: '200-600' })

export async function getAllStudents() {
    return await mock.mock({
        code: 200,
        'data|120': [{
            'id|+1': 1,
            'name': '@cname',
            'sex|0-1': 1,
            'age|10-50': 18,
            'email': '@email',
            'birth': '@date(yyyy-MM-dd HH:mm)',
        }],
        msg: 'ok'
    })
}

export async function getStudents(pageIndex = 1, pageSize = 10) {
    const res = await getAllStudents()
    const all = res.data;
    return {
        code: 200,
        data: all.slice((pageIndex-1)*pageSize, pageIndex*pageSize),
        msg: 'ok',
        pageIndex,
        pageSize,
        total: all.length
    }
}