export const FETCH_PROJECT_REQUEST = 'FETCH_PROJECT_REQUEST';
export const FETCH_PROJECT_SUCCESS = 'FETCH_PROJECT_SUCCESS';
export const FETCH_PROJECT_FAILURE = 'FETCH_PROJECT_FAILURE';

export const FETCH_PROJECTS_REQUEST = 'FETCH_PROJECTS_REQUEST';
export const FETCH_PROJECTS_SUCCESS = 'FETCH_PROJECTS_SUCCESS';
export const FETCH_PROJECTS_FAILURE = 'FETCH_PROJECTS_FAILURE';

export const FETCH_PROJECTS_WITH_SKILLS_REQUEST = 'FETCH_PROJECTS_WITH_SKILLS_REQUEST';
export const FETCH_PROJECTS_WITH_SKILLS_SUCCESS = 'FETCH_PROJECTS_WITH_SKILLS_SUCCESS';
export const FETCH_PROJECTS_WITH_SKILLS_FAILURE = 'FETCH_PROJECTS_WITH_SKILLS_FAILURE';

export function fetchProjectRequest(payload) {
    return {
        type: FETCH_PROJECT_REQUEST,
        payload
    };
}

export function fetchProjectSuccess(payload) {
    return {
        type: FETCH_PROJECT_SUCCESS,
        payload
    };
}

export function fetchProjectFailure(error) {
    console.error(error, error.stack);
    return {
        type: FETCH_PROJECT_FAILURE,
        payload: error
    };
}

export function fetchProjectsRequest(payload) {
    return {
        type: FETCH_PROJECTS_REQUEST,
        payload
    };
}

export function fetchProjectsSuccess(payload) {
    return {
        type: FETCH_PROJECTS_SUCCESS,
        payload
    };
}

export function fetchProjectsFailure(error) {
    console.error(error, error.stack);
    return {
        type: FETCH_PROJECTS_FAILURE,
        payload: error
    };
}

export function fetchProjectsWithSkillsRequest(payload) {
    return {
        type: FETCH_PROJECTS_WITH_SKILLS_REQUEST,
        payload
    };
}

export function fetchProjectsWithSkillsSuccess(payload) {
    return {
        type: FETCH_PROJECTS_WITH_SKILLS_SUCCESS,
        payload
    };
}

export function fetchProjectsWithSkillsFailure(error) {
    console.error(error, error.stack);
    return {
        type: FETCH_PROJECTS_WITH_SKILLS_FAILURE,
        payload: error
    };
}