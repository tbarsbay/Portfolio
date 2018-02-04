import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { composeContainers } from '../../../common/containers';
import { projectsContainer } from '../../containers';

const styles = {};

class Projects extends Component {

    static propTypes = {
        projects: PropTypes.array.isRequired,

        fetchProjects: PropTypes.func.isRequired,
        fetchProjectsWithSkills: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchProjects();
    }

    render() {
        const { projects } = this.props;
        return (
            <div>
                {projects.map((project) => (
                    <div key={project.id}>
                        {project.title}
                    </div>
                ))}
            </div>
        );
    }

}

export default composeContainers([ projectsContainer ], withStyles(styles)(Projects));