import store from './index'
import { fetchStudents } from './action/student/searchResult'
import { asyncIncrease } from './action/counter'

// store.dispatch(fetchStudents())
store.dispatch(asyncIncrease())