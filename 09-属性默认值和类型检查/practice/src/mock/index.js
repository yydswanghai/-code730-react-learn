import mock from 'mockjs'

mock.setup({ timeout: '200-600' })

export async function getStudentsList() {
    return await mock.mock({
        'data|1-10': [{
            'id|+1': 1,
            'name': '@cname',
            'age|10-50': 18
        }]
    })
}