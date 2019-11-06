import { CLEAR_STATUS_MESSAGE, SET_SUCCESS_STATUS_MESSAGE, SET_ERROR_STATUS_MESSAGE } from '../actions/statusMessage'

export default statusMessage = (state = null, action) => {
    switch(action.type){
        case CLEAR_STATUS_MESSAGE:
            return null
        case SET_SUCCESS_STATUS_MESSAGE:
            return { type: 'success', message: action.message }
        case SET_ERROR_STATUS_MESSAGE:
            return { type: 'error', message: action.message }
        default:
            return state
            
    }
}