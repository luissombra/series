import series from './series'
import user from './user'
import statusMessage from './statusMessage'
import loading from './loading'
import { combineReducers } from 'redux'

export default combineReducers({
    user,
    series,
    loading,
    statusMessage
})