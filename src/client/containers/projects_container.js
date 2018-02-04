import { connect } from 'react-redux';

import { projectsActionCreator } from '../actions/projects';

function mapStateToProps({ projects }) {
    return projects;
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProjects: projectsActionCreator.fetchProjects,
        fetchProject: projectsActionCreator.fetchProject,
        fetchProjectsWithSkills: projectsActionCreator.fetchProjectsWithSkills
    }
}

export default connect(mapStateToProps, mapDispatchToProps);