import { SETLOGINUSERTYPE } from '../action/loginUser-action'

export default (state = null, { type, payload }) => {
    switch (type) {
        case SETLOGINUSERTYPE:
            return payload;
        default:
            return state;
    }
}