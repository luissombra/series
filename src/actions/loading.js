const LOADING_STARTED = "LOADING_STARTED"
const LOADING_ENDED = "LOADING_ENDED"

const loadingStarted = () => ({
    type: LOADING_STARTED 
})

const loadingEnded = () => ({
    type: LOADING_ENDED
})

export {
    LOADING_STARTED,
    LOADING_ENDED,
    loadingStarted,
    loadingEnded
}