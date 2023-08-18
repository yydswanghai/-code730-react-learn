import store from './index'
import { fetchStudents } from './action/student/searchResult'

store.dispatch(fetchStudents())