import { firebaseAuth } from '../utils/firebase'

const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS'

function userLoginSuccess(user){
    return {
        type: USER_LOGIN_SUCCESS,
        user
    }
}

const tryLogin = (email, pass) => (dispatch) => {
    return new Promise((resolve, reject) => {
        firebaseAuth
            .signInWithEmailAndPassword(email, pass)
            .then(response => {
                dispatch(userLoginSuccess(response.user))
                resolve(response.user)
            })
            .catch(reject)
    })

}

export {
    USER_LOGIN_SUCCESS,
    tryLogin
}