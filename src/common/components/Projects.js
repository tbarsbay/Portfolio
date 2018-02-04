import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getProjects } from '../api/projects';

class Projects extends Component {
    renderProjects(projects) {
        return projects.map((project) => (
            <Project key={project.title} project={project} />
        ));
    }
    render() {
        const projects = getProjects();
        return (
            <div>
                {this.renderProjects(projects)}
            </div>
        )
    }
}

class Project extends Component {
    static propTypes = {
        project: PropTypes.object.isRequired,
    }

    render() {
        var { project } = this.props;
        return (
            <div>
                {project.title}
            </div>
        );
    }
}

export default Projects;
