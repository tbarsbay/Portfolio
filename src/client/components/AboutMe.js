import React, { Component } from 'react';
import Typography from 'material-ui/Typography';
import Avatar from 'material-ui/Avatar';
import Hidden from 'material-ui/Hidden';
import SchoolIcon from 'material-ui-icons/School';
import WorkIcon from 'material-ui-icons/Work';
import PlaceIcon from 'material-ui-icons/Place';
import ArrowBackIcon from 'material-ui-icons/ArrowBack';
import { withStyles } from 'material-ui/styles';
import { grey } from 'material-ui/colors';

import ProfilePhoto from './ProfilePhoto';

const styles = theme => ({
    tidbitContainer: {
        display: 'flex',
        alignItems: 'center',
        padding: '2px 0px'
    },
    tidbitIcon: {
        width: 20,
        height: 20,
        fill: 'white'
    },
    tidbitAvatar: {
        width: 32,
        height: 32,
        backgroundColor: theme.palette.primary['500'],
        marginRight: 8
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

class AboutMe extends Component {

    previousPlace = name => (
        <div className={this.props.classes.previousPlaceContainer}>
            <ArrowBackIcon className={this.props.classes.arrowBackIcon} />    
            <Typography variant="body2" className={this.props.classes.previousPlaceLabel}>{name}</Typography>
        </div>
    );

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Hidden mdUp>
                    <ProfilePhoto style={{marginTop: 24}}/>
                </Hidden>

                <Typography variant="display3">
                    tamer barsbay
                </Typography>

                <Typography variant="title" gutterBottom>
                    mobile developer, android enthusiast, and budding web developer with a strong sense for mobile product and design details
                </Typography>

                <div className={classes.tidbitContainer}>
                    <Avatar className={classes.tidbitAvatar}>
                        <WorkIcon className={classes.tidbitIcon}/>
                    </Avatar>

                    <Typography variant="body2">
                        Staff Android Engineer at Mailchimp
                    </Typography>
                </div>

                <div className={classes.tidbitContainer}>
                    <Avatar className={classes.tidbitAvatar}>
                        <SchoolIcon className={classes.tidbitIcon}/>
                    </Avatar>

                    <Typography variant="body2">
                        University of Chicago, BS Mathematics
                    </Typography>
                </div>

                <div className={classes.tidbitContainer}>
                    <Avatar className={classes.tidbitAvatar}>
                        <PlaceIcon className={classes.tidbitIcon} />
                    </Avatar>

                    <Typography variant="body2">
                        Atlanta
                    </Typography>
                    
                    {this.previousPlace("San Francisco")}
                    {this.previousPlace("Chicago")}
                    {this.previousPlace("New Jersey")}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AboutMe);