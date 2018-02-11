import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Avatar from 'material-ui/Avatar';
import { withStyles } from 'material-ui/styles';

const styles = {
    photo: {
        width: 150,
        height: 150
    }
}

class ProfilePhoto extends PureComponent {

    static propTypes = {
        style: PropTypes.object,
        classes: PropTypes.object.isRequired
    }

    render() {
        const { style, classes } = this.props;
        return (
            <Avatar
                alt="Tamer Barsbay"
                src="/images/tamer_cropped.jpg"
                className={classes.photo}
                style={style}
            />
        );
    }

}

export default withStyles(styles)(ProfilePhoto);