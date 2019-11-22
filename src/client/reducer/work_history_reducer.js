import {
    FETCH_WORK_HISTORY_REQUEST,
    FETCH_WORK_HISTORY_SUCCESS,
    FETCH_WORK_HISTORY_FAILURE
} from "../actions/work_history/work_history_actions";
import { reducerFactory } from "../../common/reducer";

const INITIAL_STATE = {
    isLoadingWorkHistory: false,
    hasErrorLoadingWorkHistory: false,
    workHistory: []
};

const workHistoryReducer = {
    [FETCH_WORK_HISTORY_REQUEST]: handleFetchWorkHistory,
    [FETCH_WORK_HISTORY_SUCCESS]: handleFetchWorkHistorySuccess,
    [FETCH_WORK_HISTORY_FAILURE]: handleFetchWorkHistoryFailure
};

function handleFetchWorkHistory(state) {
    return {
        ...state,
        isLoadingWorkHistory: true,
        hasErrorLoadingWorkHistory: false,
        workHistory: []
    };
}

function handleFetchWorkHistorySuccess(state, { workHistory }) {
    return {
        ...state,
        isLoadingWorkHistory: false,
        workHistory
    };
}

function handleFetchWorkHistoryFailure(state) {
    return {
        ...state,
        isLoadingWorkHistory: false,
        hasErrorLoadingWorkHistory: true
    };
}

export default reducerFactory(workHistoryReducer, INITIAL_STATE);