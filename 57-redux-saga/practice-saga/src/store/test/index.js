import store from '../index'
import { fetchStudents } from '../action/student/searchResult'
import { asyncIncrease, asyncDecrease, autoIncrease, stopIncrease } from '../action/counter'

// store.dispatch(fetchStudents())

window.asyncIncrease = () => store.dispatch(asyncIncrease())
window.asyncDecrease = () => store.dispatch(asyncDecrease())
window.autoIncrease = () => store.dispatch(autoIncrease())
window.stopIncrease = () => store.dispatch(stopIncrease())