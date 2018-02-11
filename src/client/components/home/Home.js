import React, { Component } from 'react';
import { grey } from 'material-ui/colors';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Grid from 'material-ui/Grid';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import PlaceIcon from 'material-ui-icons/Place';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { withStyles } from 'material-ui/styles';

import Projects from '../projects';
import Todos from '../todos';

const styles = theme => ({
    parentContainer: {
        paddingBottom: 48
    },
    aboutMeItemContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 0px'
    },
    aboutMeItemIcon: {
        width: 20,
        height: 20,
        fill: 'white'
    },
    aboutMeItemAvatar: {
        width: 32,
        height: 32,
        backgroundColor: theme.palette.primary['500'],
        marginRight: 8
    },
    divider: {
        marginTop: 24,
        marginBottom: 24,
        height: 1,
        background: grey[300]
    },
    previousPlaceContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    previousPlaceLabel: {
        opacity: 0.56,
        textAlign: 'center',
        lineHeight: '1em',
        marginLeft: 2,
        marginRight: 2
    },
    arrowBackIcon: {
        fill: grey[500],
        width: 16,
        height: 16,
        marginLeft: 4,
        marginRight: 4
    }
});

//TODO future places to move to?

class Home extends Component {

    previousPlace = name => (
        <div className={this.props.classes.previousPlaceContainer}>
            <ArrowBackIcon className={this.props.classes.arrowBackIcon} />    
            <Typography variant="body2" className={this.props.classes.previousPlaceLabel}>{name}</Typography>
        </div>
    );

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.parentContainer}>
                <Grid container>
                    <Grid item xs={1} md={2} lg={3} />

                    <Grid item xs={10} md={8} lg={6}>
                        <Typography variant="display3">
                            tamer barsbay
                        </Typography>

                        <Typography variant="title" gutterBottom>
                            mobile developer, android enthusiast, and budding web developer with a strong sense for mobile product and design details
                        </Typography>

                        <div className={classes.aboutMeItemContainer}>
                            <Avatar className={classes.aboutMeItemAvatar}>
                                <SchoolIcon className={classes.aboutMeItemIcon}/>
                            </Avatar>

                            <Typography variant="body2">
                                University of Chicago, BS Mathematics
                            </Typography>
                        </div>

                        <div className={classes.aboutMeItemContainer}>
                            <Avatar className={classes.aboutMeItemAvatar}>
                                <WorkIcon className={classes.aboutMeItemIcon}/>
                            </Avatar>

                            <Typography variant="body2">
                                Software Engineer at Hirewire
                            </Typography>
                        </div>

                        <div className={classes.aboutMeItemContainer}>
                            <Avatar className={classes.aboutMeItemAvatar}>
                                <PlaceIcon className={classes.aboutMeItemIcon} />
                            </Avatar>

                            <Typography variant="body2">
                                Atlanta
                            </Typography>
                            
                            {this.previousPlace("San Francisco")}
                            {this.previousPlace("Chicago")}
                            {this.previousPlace("New Jersey")}
                        </div>

                        <div className={classes.divider}/>

                        <Projects />

                        <div className={classes.divider}/>

                        <Todos />
                    </Grid>

                    <Grid item xs={1} md={2} lg={3} />
                </Grid>
            </div>
        );
    }

}

export default withStyles(styles)(Home);