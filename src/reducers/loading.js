import { LOADING_STARTED, LOADING_ENDED } from '../actions/loading'

export default loading = (state = false, action) => {
    switch(action.action){
        case LOADING_STARTED:
            return true
        case LOADING_ENDED:
            return false
        default:
            return state
    }
}