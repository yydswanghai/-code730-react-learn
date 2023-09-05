import { LOCATION_CHANGE } from './actionTypes'
/**
 * reducer
 * @param {*} state
 * @param {{ type: string, payload: { action: "PUSH"|"POP"|"REPLACE", location: object } }} action
 */
export default function (history) {
    const initial = {
        location: history.location,
        action: history.action
    }
    return function(state = initial, action) {
        switch (action.type) {
            case LOCATION_CHANGE:
                return action.payload;
            default:
                return state;
        }
    }
}