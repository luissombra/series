import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools }  from 'remote-redux-devtools'
import reducers from '../reducers'
import { loadingStarted } from '../actions/loading'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

//store.dispatch(loadingStarted())

export default store