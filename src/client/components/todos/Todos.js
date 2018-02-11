import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';
import { withStyles } from 'material-ui/styles';
import { green } from 'material-ui/colors';
import DoneIcon from 'material-ui-icons/Done';
import HelpOutlineIcon from 'material-ui-icons/HelpOutline';
import Tooltip from 'material-ui/Tooltip';

const styles = theme => ({
    todoContainer: {
        display: 'flex',
        alignItems: 'center'
    },
    completedIcon: {
        width: 20,
        height: 20,
        fill: green[500],
        marginRight: 8
    },
    tooltipIcon: {
        width: 20,
        height: 20,
        fill: theme.palette.secondary['500'],
        marginLeft: 8
    }
});

//TODO move todos to api
class Todos extends Component {

    static propTypes = {
        classes: PropTypes.object.isRequired
    };

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Typography variant="display1" gutterBottom>
                    site TODOs
                </Typography>

                <Typography variant="body2" gutterBottom>
                    this site serves as my portfolio but also my playground for experimenting with web development tools and tech
                </Typography>

                <Todo title="deploy minimal but functional first version" completed classes={classes} />
                <Todo title="implement redux" completed classes={classes} />
                <Todo title="fill in project details" classes={classes} />
                <Todo title="automate build and deployment process" classes={classes} />
                <Todo title="pretty ui" classes={classes} />
                <Todo title="look into typescript" classes={classes} />
                <Todo title="use a linter" classes={classes} />
                <Todo title="node.js backend or firebase database" classes={classes} />
                <Todo title="google analytics" classes={classes} />
                <Todo title="progressive web app" classes={classes} />
                <Todo title="rewrite in kotlin" tooltip="to improve my kotlin skills" classes={classes} />
                <Todo title="autoplay my favorite song on page open" tooltip="just kidding" classes={classes} />
            </div>
        );
    }

}

class Todo extends PureComponent {

    static propTypes = {
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool,
        tooltip: PropTypes.string,
        classes: PropTypes.object.isRequired
    };

    render() {
        const { title, tooltip, completed, classes } = this.props;
        return (
            <div className={classes.todoContainer}>
                {completed && 
                    <DoneIcon className={classes.completedIcon} />
                }

                {!completed &&
                    <div style={{width: 20, marginRight: 8}}/>
                }

                <Typography variant="body2">
                    {title}
                </Typography>

                {tooltip && 
                    <Tooltip title={tooltip}>
                        <HelpOutlineIcon className={classes.tooltipIcon} />
                    </Tooltip>
                }
            </div>
        );
    }
}

export default withStyles(styles)(Todos);