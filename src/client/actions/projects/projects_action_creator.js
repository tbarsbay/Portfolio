import { dispatch } from '../../store';
import PortfolioService from '../../../common/services';
import * as actions from './projects_actions';

export function fetchProjects() {
    dispatch(actions.fetchProjectsRequest());

    return PortfolioService.fetchProjects()
        .then((projects) => {
            if (projects) {
                dispatch(actions.fetchProjectsSuccess({ projects }));
                return projects;
            } else {
                dispatch(actions.fetchProjectsFailure(new Error(`Failed to get projects.`)));
            }
        })
        .catch((error) => {
            dispatch(actions.fetchProjectsFailure(error));
        });
}

export function fetchProject({ id }) {
    dispatch(actions.fetchProjectRequest());

    return PortfolioService.fetchProject({ id })
        .then((project) => {
            if (project) {
                dispatch(actions.fetchProjectSuccess({ project }));
                return project;
            } else {
                dispatch(actions.fetchProjectFailure(new Error(`Failed to get project with id ${id}.`)));
            }
        })
        .catch((error) => {
            dispatch(actions.fetchProjectFailure(error));
        });
}

export function fetchProjectsWithSkills({ skillIds }) {
    dispatch(actions.fetchProjectsWithSkillsRequest());

    return PortfolioService.fetchProjectsWithSkills({ skillIds })
        .then((projects) => {
            if (projects) {
                dispatch(actions.fetchProjectsWithSkillsSuccess({ projects }));
            } else {
                dispatch(actions.fetchProjectsWithSkillsFailure(new Error(`Failed to get projects filtered by skills.`)));
            }
        })
        .catch((error) => {
            dispatch(actions.fetchProjectsWithSkillsFailure(error));
        });
}