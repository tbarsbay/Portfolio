import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    parentContainer: {
        padding: 24
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
            startDate: PropTypes.instanceOf(Date),
            endDate: PropTypes.instanceOf(Date),
            isPresent: PropTypes.bool.isRequired,
            city: PropTypes.string.isRequired,
            state: PropTypes.string.isRequired
        })
    };

    render() {
        const { workHistory } = this.props;

        if (!workHistory) {
            return null;
        }

        return (
            <div>
                <Typography variant="title">
                        {workHistory.roleTitle} at {workHistory.company}
                </Typography>
            </div>
        );
    }

}

export default withStyles(styles)(WorkHistoryItem);