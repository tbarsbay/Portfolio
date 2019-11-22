import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Dialog, { DialogContent } from 'material-ui/Dialog';
import { withStyles } from 'material-ui/styles';
import Slide from 'material-ui/transitions/Slide';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    parentContainer: {
        padding: 24
    }
});

function Transition(props) {
    return <Slide direction="up" {...props} />;
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
        }),
        onClose: PropTypes.func.isRequired
    };

    render() {
        const {
            project,
            onClose,
            classes
        } = this.props;
        
        //TODO rework a bit so that we dont lose the exit transition by rendering null
        if (!project) {
            return null;
        }

        return (
            <Dialog 
                open={true} 
                onClose={onClose}>
                <DialogContent>
                    <Typography variant="display3">
                        {project.title}
                    </Typography>

                    <Typography variant="title" gutterBottom>
                        {project.shortDescription}
                    </Typography>

                    <Typography variant="body2">
                        {project.longDescription}
                    </Typography>
                </DialogContent>
            </Dialog>
        );
    }

}

export default withStyles(styles)(Project);