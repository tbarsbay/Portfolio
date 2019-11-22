import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui';

const styles = theme => ({
    parentContainer: {
        display: 'flex',
        marginBottom: 24,
        alignItems: 'center'
    },
    roleContainer: {
        flex: 1
    },
    companyLogo: {
        width: '5%',
        height: 'auto',
        marginRight: 16
    }
});

class WorkHistoryItem extends PureComponent {

    static propTypes = {
        workHistory: PropTypes.shape({
            roleTitle: PropTypes.string.isRequired,
            company: PropTypes.string.isRequired,
            logoUrl: PropTypes.string,
            link: PropTypes.string,
            description: PropTypes.string,
            startDate: PropTypes.string.isRequired,
            endDate: PropTypes.string,
            isPresent: PropTypes.bool.isRequired,
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired
        })
    };

    render() {
        const { workHistory, classes } = this.props;

        if (!workHistory) {
            return null;
        }

        const {
            roleTitle,
            company,
            startDate,
            endDate,
            isPresent,
            city,
            state,
            logoUrl
        } = workHistory;

        var dates = `${startDate} - `;
        if (!!isPresent) {
            dates = dates + "Present";
        } else if (endDate) {
            dates = dates + endDate;
        }

        return (
            <div className={classes.parentContainer}>
                {logoUrl && 
                    <img 
                        src={process.env.PUBLIC_URL + logoUrl}
                        className={classes.companyLogo}
                    />
                }

                <div className={classes.roleContainer}>
                    <Typography variant="subheading">
                        {roleTitle}
                    </Typography>
                    <Typography variant="body1">
                        {company}
                    </Typography>
                    <Typography variant="caption">
                        {dates}
                    </Typography>
                </div>

                <div>
                    <Typography variant="caption">
                        {city}, {state}
                    </Typography>
                </div>
            </div>
        );
    }

}

export default withStyles(styles)(WorkHistoryItem);