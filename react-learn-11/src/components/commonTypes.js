import types from 'prop-types'

const commonTypes = {
    children: types.node,
    groupDatas: types.arrayOf(types.shape({
        value: types.string.isRequired,
        text: types.string.isRequired
    })), //多选框组、单选框组、下拉列表的数据源
    chooseDatas: types.arrayOf(types.string),
}

export default commonTypes