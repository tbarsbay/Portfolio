import React, { Component } from 'react';
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import { grey } from 'material-ui/colors';

import AboutMe from '../about_me';
import Projects from '../projects';
import Todos from '../todos';

const styles = theme => ({
    parentContainer: {
        paddingBottom: 48
    },
    divider: {
        marginTop: 24,
        marginBottom: 24,
        height: 1,
        background: grey[300]
    },
});

//TODO future places to move to?

class Home extends Component {

    divider = <div className={this.props.classes.divider}/>;

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.parentContainer}>
                <Grid container>
                    <Grid item xs={1} md={2} lg={3} />

                    <Grid item xs={10} md={8} lg={6}>
                        <AboutMe />
                        {this.divider}
                        <Projects />
                        {this.divider}
                        <Todos />
                    </Grid>

                    <Grid item xs={1} md={2} lg={3} />
                </Grid>
            </div>
        );
    }

}

export default withStyles(styles)(Home);