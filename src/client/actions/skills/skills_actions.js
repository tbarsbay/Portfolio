export const FETCH_SKILLS_REQUEST = 'FETCH_SKILLS_REQUEST';
export const FETCH_SKILLS_SUCCESS = 'FETCH_SKILLS_SUCCESS';
export const FETCH_SKILLS_FAILURE = 'FETCH_SKILLS_FAILURE';

export const SELECT_SKILL = 'SELECT_SKILL';
export const UNSELECT_SKILL = 'UNSELECT_SKILL';
export const CLEAR_SKILL_SELECTIONS = 'CLEAR_SKILL_SELECTIONS';

export function fetchSkillsRequest(payload) {
    return {
        type: FETCH_SKILLS_REQUEST,
        payload
    };
}

export function fetchSkillsSuccess(payload) {
    return {
        type: FETCH_SKILLS_SUCCESS,
        payload
    };
}

export function fetchSkillsFailure(error) {
    console.error(error, error.stack);
    return {
        type: FETCH_SKILLS_FAILURE,
        payload: error
    };
}

export function selectSkill(payload) {
    return {
        type: SELECT_SKILL,
        payload
    };
}

export function unselectSkill(payload) {
    return {
        type: UNSELECT_SKILL,
        payload
    };
}

export function clearSkillSelections(payload) {
    return {
        type: CLEAR_SKILL_SELECTIONS,
        payload
    };
}