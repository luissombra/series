import { firebaseAuth } from '../utils/firebase'
import getMessageByErrorCode from '../utils/getMessageByErrorCode'

const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

import {
    clearStatusMessage, 
    setSuccessStatusMessage, 
    setErrorStatusMessage
} from './statusMessage'

import { 
    loadingStarted, 
    loadingEnded 
} from './loading'

function userLoginSuccess(user){
    return {
        type: USER_LOGIN_SUCCESS,
        user
    }
}

function userLoginFail(error){
    return {
        type: USER_LOGIN_FAIL,
        error
    }
}

const tryLogin = (email, pass) => (dispatch) => {
    dispatch(clearStatusMessage())
    dispatch(loadingStarted())

    return firebaseAuth
        .signInWithEmailAndPassword(email, pass)
        .then(response => {
            dispatch(setSuccessStatusMessage('logado com sucesso!'))
			dispatch(userLoginSuccess(response.user))
			return response.user
		})
        .catch(error => {
            dispatch(
                setErrorStatusMessage(
                    getMessageByErrorCode(error.code)
                )
            )
            dispatch(userLoginFail(error))
            return error
        })
        .then(() => {
            dispatch(loadingEnded())
        })
}

export {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    tryLogin
}