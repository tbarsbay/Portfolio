import {
    FETCH_PROJECT_REQUEST,
    FETCH_PROJECT_SUCCESS,
    FETCH_PROJECT_FAILURE,
    FETCH_PROJECTS_REQUEST,
    FETCH_PROJECTS_SUCCESS,
    FETCH_PROJECTS_FAILURE,
    FETCH_PROJECTS_WITH_SKILLS_REQUEST,
    FETCH_PROJECTS_WITH_SKILLS_SUCCESS,
    FETCH_PROJECTS_WITH_SKILLS_FAILURE,
    SELECT_PROJECT
} from '../actions/projects/projects_actions';
import { reducerFactory } from '../../common/reducer';

const INITIAL_STATE = {
    isLoadingProjects: false,
    isLoadingProject: false,
    hasErrorLoadingProjects: false,
    hasErrorLoadingProject: false,
    project: {},
    projects: [],
    selectedProject: null
};

const projectsReducer = {
    [FETCH_PROJECT_REQUEST]: handleFetchProject,
    [FETCH_PROJECT_SUCCESS]: handleFetchProjectSuccess,
    [FETCH_PROJECT_FAILURE]: handleFetchProjectFailure,
    [FETCH_PROJECTS_REQUEST]: handleFetchProjects,
    [FETCH_PROJECTS_SUCCESS]: handleFetchProjectsSuccess,
    [FETCH_PROJECTS_FAILURE]: handleFetchProjectsFailure,
    [FETCH_PROJECTS_WITH_SKILLS_REQUEST]: handleFetchProjectsWithSkills,
    [FETCH_PROJECTS_WITH_SKILLS_SUCCESS]: handleFetchProjectsWithSkillsSuccess,
    [FETCH_PROJECTS_WITH_SKILLS_FAILURE]: handleFetchProjectsWithSkillsFailure,
    [SELECT_PROJECT]: handleSelectProject
};

function handleFetchProject(state) {
    return {
        ...state,
        isLoadingProject: true,
        hasErrorLoadingProject: false,
        project: {},
        selectedProject: null
    };
}

function handleFetchProjectSuccess(state, { project }) {
    return {
        ...state,
        isLoadingProject: false,
        project
    };
}

function handleFetchProjectFailure(state) {
    return {
        ...state,
        isLoadingProject: false,
        hasErrorLoadingProject: true
    };
}

function handleFetchProjects(state) {
    return {
        ...state,
        isLoadingProjects: true,
        hasErrorLoadingProjects: false,
        projects: [],
        selectedProject: null
    };
}

function handleFetchProjectsSuccess(state, { projects }) {
    return {
        ...state,
        isLoadingProjects: false,
        projects
    };
}

function handleFetchProjectsFailure(state) {
    return {
        ...state,
        isLoadingProjects: false,
        hasErrorLoadingProjects: true
    };
}

function handleFetchProjectsWithSkills(state) {
    return {
        ...state,
        isLoadingProjects: true,
        hasErrorLoadingProjects: false,
        projects: []
    };
}

function handleFetchProjectsWithSkillsSuccess(state, { projects }) {
    return {
        ...state,
        isLoadingProjects: false,
        projects
    };
}

function handleFetchProjectsWithSkillsFailure(state) {
    return {
        ...state,
        isLoadingProjects: false,
        hasErrorLoadingProjects: true
    };
}

function handleSelectProject(state, { project }) {
    return {
        ...state,
        selectedProject: project
    };
}

export default reducerFactory(projectsReducer, INITIAL_STATE);