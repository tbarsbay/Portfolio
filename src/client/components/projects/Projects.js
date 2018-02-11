import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Card, { CardContent, CardMedia } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { } from 'material-ui/colors'

import { composeContainers } from '../../../common/containers';
import { projectsContainer, skillsContainer } from '../../containers';
import Skills from '../skills';

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
        const { projects, classes } = this.props;
        return (
            <div>
                <Skills />

                <Typography gutterBottom variant="display1" className={classes.title}>
                    projects
                </Typography>

                <Grid container>
                    {projects.map((project) => (
                        <Grid item key={project.id} xs={12} sm={6}>
                            <Project project={project} classes={classes} />
                        </Grid>
                    ))}
                </Grid>
            </div>
        );
    }

}

class Project extends PureComponent {

    static propTypes = {
        project: PropTypes.shape({
            title: PropTypes.string.isRequired,
            subtitle: PropTypes.string,
            link: PropTypes.string,
            shortDescription: PropTypes.string,
            longDescription: PropTypes.string,
            thumbnailPhotoUrl: PropTypes.string,
            primaryPhotoUrl: PropTypes.string,
            secondaryPhotoUrls: PropTypes.array,
            roles: PropTypes.object.isRequired,
            skills: PropTypes.array
        }).isRequired,
        classes: PropTypes.object.isRequired
    };

    render() {
        const { project, classes } = this.props;
        return (
            <Card>
                <CardMedia
                    className={classes.projectImage}
                    image="https://material-ui-next.com/static/images/cards/contemplative-reptile.jpg"
                />

                <CardContent>
                    <Typography variant="subheading" className={classes.projectTitle} gutterBottom>
                        {project.title}
                    </Typography>

                    <Typography variant="body1">
                        {'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}
                    </Typography>
                </CardContent>
            </Card>
        );
    }

}

export default composeContainers([ projectsContainer, skillsContainer ], withStyles(styles)(Projects));