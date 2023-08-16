import { getRandomString } from './utils'

export default {
    INIT: '@@redux/INIT' + getRandomString(7),
    UNKNOWN: '@@redux/PROBE_UNKNOWN_ACTION' + getRandomString(7)
}