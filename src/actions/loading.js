const LOADING_STARTED = "LOADING_STARTED"
const LOADING_ENDED = "LOADING_ENDED"
const LOADING_TRUE = "LOADING_TRUE"
const LOADING_FALSE = "LOADING_FALSE"

const loadingStarted = () => {
    return {
        type: LOADING_STARTED
    }
}

const loadingEnded = () => {
    return {
        type: LOADING_ENDED
    }
}

export {
    LOADING_STARTED,
    LOADING_ENDED,
    LOADING_TRUE,
    LOADING_FALSE,
    loadingStarted,
    loadingEnded
}