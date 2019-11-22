import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { } from 'material-ui/colors'

import { composeContainers } from '../../common/containers';
import { projectsContainer, skillsContainer } from '../containers';
import Skills from './Skills';
import ProjectDetails from './Project';

const styles = theme => ({
    projectImage: {
        height: 150
    },
    projectTitle: {

    }
});

class Projects extends Component {

    static propTypes = {
        projects: PropTypes.array.isRequired,
        selectedProject: PropTypes.object,
        selectedSkills: PropTypes.array.isRequired,
        fetchProjects: PropTypes.func.isRequired,
        fetchProjectsWithSkills: PropTypes.func.isRequired,
        selectProject: PropTypes.func.isRequired,
        unselectProject: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchProjects();
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.selectedSkills !== nextProps.selectedSkills) {
            this.props.fetchProjectsWithSkills({ skillIds: nextProps.selectedSkills });
        }
    }

    onClickProject = project => () => {
        const { selectProject } = this.props;
        selectProject(project);
    }
    
    onCloseProject = () => {
        const { unselectProject } = this.props;
        unselectProject();
    }

    render() {
        const { projects, selectedProject, classes } = this.props;
        return (
            <div>
                <Skills />

                <Typography gutterBottom variant="display1" className={classes.title}>
                    projects
                </Typography>

                <Grid container>
                    {projects.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6}>
                            <Project project={project} onClick={this.onClickProject(project)} classes={classes} />
                        </Grid>
                    ))}
                </Grid>

                <ProjectDetails 
                    project={selectedProject}
                    onClose={this.onCloseProject}
                />
            </div>
        );
    }

}

class Project extends PureComponent {

    static propTypes = {
        project: PropTypes.shape({
            title: PropTypes.string.isRequired,
            link: PropTypes.string,
            shortDescription: PropTypes.string,
            longDescription: PropTypes.string,
            primaryImageUrl: PropTypes.string,
            secondaryImageUrls: PropTypes.array,
            roles: PropTypes.object.isRequired,
            skills: PropTypes.array
        }).isRequired,
        onClick: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired
    };

    render() {
        const { project, onClick, classes } = this.props;
        return (
            <Card onClick={onClick}>
                <CardMedia
                    className={classes.projectImage}
                    image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
                />

                <CardContent>
                    <Typography variant="subheading" className={classes.projectTitle} gutterBottom>
                        {project.title}
                    </Typography>

                    <Typography variant="body1">
                        {project.shortDescription}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

}

export default composeContainers([ projectsContainer, skillsContainer ], withStyles(styles)(Projects));