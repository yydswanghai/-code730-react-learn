import store from '../index'
import { fetchUsers } from '../action/users-action'

store.dispatch(fetchUsers())