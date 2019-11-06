import series from './series'
import user from './user'
import statusMessage from './statusMessage'
import { combineReducers } from 'redux'

export default combineReducers({
    user,
    series,
    statusMessage
})