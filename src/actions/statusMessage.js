const CLEAR_STATUS_MESSAGE = "CLEAR_STATUS_MESSAGE"
const SET_SUCCESS_STATUS_MESSAGE = "SET_SUCCESS_STATUS_MESSAGE"
const SET_ERROR_STATUS_MESSAGE = "SET_ERROR_STATUS_MESSAGE"

const clearStatusMessage = () => ({
    type: CLEAR_STATUS_MESSAGE 
})

const setSuccessStatusMessage = (message) => ({
    type: SET_SUCCESS_STATUS_MESSAGE,
    message
})

const setErrorStatusMessage = (message) => ({
    type: SET_ERROR_STATUS_MESSAGE,
    message
})

export {
    CLEAR_STATUS_MESSAGE,
    SET_SUCCESS_STATUS_MESSAGE,
    SET_ERROR_STATUS_MESSAGE,
    clearStatusMessage,
    setSuccessStatusMessage,
    setErrorStatusMessage
}