export const FETCH_WORK_HISTORY_REQUEST = 'FETCH_WORK_HISTORY_REQUEST';
export const FETCH_WORK_HISTORY_SUCCESS = 'FETCH_WORK_HISTORY_SUCCESS';
export const FETCH_WORK_HISTORY_FAILURE = 'FETCH_WORK_HISTORY_FAILURE';

export function fetchWorkHistoryRequest(payload) {
    return {
        type: FETCH_WORK_HISTORY_REQUEST,
        payload
    };
}

export function fetchWorkHistorySuccess(payload) {
    return {
        type: FETCH_WORK_HISTORY_SUCCESS,
        payload
    };
}

export function fetchWorkHistoryFailure(error) {
    console.error(error, error.stack);
    return {
        type: FETCH_WORK_HISTORY_FAILURE,
        payload: error
    };
}