import { firebaseAuth } from '../utils/firebase'

const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'
const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL'

import {clearStatusMessage, setSuccessStatusMessage, setErrorStatusMessage} from './statusMessage'

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

    return firebaseAuth
        .signInWithEmailAndPassword(email, pass)
        .then(response => {
            dispatch(setSuccessStatusMessage('logado com sucesso!'))
			dispatch(userLoginSuccess(response.user));
			return response.user;
		})
        .catch(error => {
            dispatch(setErrorStatusMessage(error.message))
            dispatch(userLoginFail(error));
            return error;
        })
}

export {
    USER_LOGIN_SUCCESS,
    USER_LOGIN_FAIL,
    tryLogin
}