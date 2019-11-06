import firebase from 'firebase'
import {devConfig, prodConfig } from './firebaseConfig'

const config = process.env.NODE_ENV === 'production'
    ? prodConfig
    : devConfig;

const firebaseImpl = firebase.initializeApp(config)
const firebaseAuth = firebase.auth()


export {
    firebase,
    firebaseImpl,
    firebaseAuth
}