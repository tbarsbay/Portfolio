import { connect } from 'react-redux';

import { projectsActionCreator, projectsActions } from '../actions/projects';

function mapStateToProps({ projects }) {
    return projects;
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProjects: projectsActionCreator.fetchProjects,
        fetchProject: projectsActionCreator.fetchProject,
        fetchProjectsWithSkills: projectsActionCreator.fetchProjectsWithSkills,
        selectProject: (project) => { dispatch(projectsActions.selectProject({ project })) },
        unselectProject: () => { dispatch(projectsActions.selectProject({ project: null })) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps);