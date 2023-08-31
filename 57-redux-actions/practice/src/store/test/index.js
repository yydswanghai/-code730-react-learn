import store from '../index'
import { increase } from '../action/counter'
import { fetchStudents } from '../action/student/searchResult'

store.dispatch(increase())

store.dispatch(fetchStudents())