import {
    FETCH_SKILLS_REQUEST,
    FETCH_SKILLS_SUCCESS,
    FETCH_SKILLS_FAILURE,
    SELECT_SKILL,
    UNSELECT_SKILL,
    CLEAR_SKILL_SELECTIONS
} from '../actions/skills/skills_actions';
import { reducerFactory } from '../../common/reducer';

const INITIAL_STATE = {
    isLoadingSkills: false,
    hasErrorLoadingSkills: false,
    skills: [],
    selectedSkills: []
};

const skillsReducer = {
    [FETCH_SKILLS_REQUEST]: handleFetchSkills,
    [FETCH_SKILLS_SUCCESS]: handleFetchSkillsSuccess,
    [FETCH_SKILLS_FAILURE]: handleFetchSkillsFailure,
    [SELECT_SKILL]: handleSelectSkill,
    [UNSELECT_SKILL]: handleUnselectSkill,
    [CLEAR_SKILL_SELECTIONS]: handleClearSkillSelections
};

function handleFetchSkills(state) {
    return {
        ...state,
        isLoadingSkills: true,
        hasErrorLoadingSkills: false,
        skills: []
    };
}

function handleFetchSkillsSuccess(state, { skills }) {
    return {
        ...state,
        isLoadingSkills: false,
        skills
    };
}

function handleFetchSkillsFailure(state) {
    return {
        ...state,
        isLoadingSkills: false,
        hasErrorLoadingSkills: true
    };
}

function handleSelectSkill(state, { skill }) {
    var selectedSkills = [ ...state.selectedSkills ];
    if (!selectedSkills.includes(skill.id)) {
        selectedSkills.push(skill.id);
    };
    return {
        ...state,
        selectedSkills
    };
}

function handleUnselectSkill(state, { skill }) {
    var selectedSkills = [ ...state.selectedSkills ];
    selectedSkills = selectedSkills.filter(id => id !== skill.id);
    return {
        ...state,
        selectedSkills
    };
}

function handleClearSkillSelections(state) {
    return {
        ...state,
        selectedSkills: []
    };
}

export default reducerFactory(skillsReducer, INITIAL_STATE);