import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card, { CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';

import { composeContainers } from '../../common/containers';
import { workHistoryContainer } from '../containers';
import WorkHistoryItem from './WorkHistoryItem';

const styles = theme => ({

});

class WorkHistory extends Component {

    static propTypes = {
        workHistory: PropTypes.array.isRequired,
        fetchWorkHistory: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchWorkHistory();
    }

    render() {
        const { workHistory, classes } = this.props;
        return (
            <div>
                <Typography gutterBottom variant="display1" className={classes.title}>
                    work history
                </Typography>

                {workHistory.map((workHistoryItem) => (
                    <WorkHistoryItem workHistory={workHistoryItem} classes={classes} />
                ))}
            </div>
        )
    }

}

export default composeContainers([ workHistoryContainer ], withStyles(styles)(WorkHistory));