import store from './index'
import { changeAction } from './action/student/searchCondition'
import { fetchStudents } from './action/student/searchResult'

store.dispatch(changeAction({
    keyword: '傅'
}))

store.dispatch(fetchStudents())