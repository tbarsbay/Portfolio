import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';

import { composeContainers } from '../../../common/containers';
import { projectsContainer, skillsContainer } from '../../containers';

const styles = {};

class Projects extends Component {

    static propTypes = {
        projects: PropTypes.array.isRequired,
        selectedSkills: PropTypes.array.isRequired,
        fetchProjects: PropTypes.func.isRequired,
        fetchProjectsWithSkills: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchProjects();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedSkills !== nextProps.selectedSkills) {
            this.props.fetchProjectsWithSkills({ skillIds: nextProps.selectedSkills });
        }
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

export default composeContainers([ projectsContainer, skillsContainer ], withStyles(styles)(Projects));