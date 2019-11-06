import { USER_LOGIN_SUCCESS } from '../actions/user';

export default user = (state = null, action) => {
    switch(action.type) {
        case USER_LOGIN_SUCCESS:
            return action.user
        default:
            return state
    }
}