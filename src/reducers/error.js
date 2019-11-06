import { USER_LOGIN_FAIL } from '../actions/user'
export default error = (state = null, action) => {
    switch (action.type) {
        case USER_LOGIN_FAIL:
            return action.error
        default:
            return state
    }
}