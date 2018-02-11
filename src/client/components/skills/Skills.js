import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Chip from 'material-ui/Chip';
import Avatar from 'material-ui/Avatar';
import Typography from 'material-ui/Typography';
import DoneIcon from 'material-ui-icons/Done';
import StarIcon from 'material-ui-icons/Star';
import ClearIcon from 'material-ui-icons/Clear';
import { lightBlue, grey } from 'material-ui/colors';
import Fade from 'material-ui/transitions/Fade';

import { composeContainers } from '../../../common/containers';
import { skillsContainer } from '../../containers';

const styles = theme => ({
    chip: {
        margin: theme.spacing.unit / 2,
        fontSize: 12
    },
    selectedChip: {
        color: 'white',
        background: theme.palette.secondary['500']
    },
    selectedIcon: {
        width: 16,
        height: 16,
        fill: 'white'
    },
    clearSelectionsIcon: {
        width: 16,
        height: 16,
        marginLeft: 4,
        marginBottom: 1,
        fill: grey[500]
    }
});

class Skills extends Component {

    static propTypes = {
        skills: PropTypes.array.isRequired,
        selectedSkills: PropTypes.array.isRequired,
        fetchSkills: PropTypes.func.isRequired,
        selectSkill: PropTypes.func.isRequired,
        unselectSkill: PropTypes.func.isRequired,
        clearSkillSelections: PropTypes.func.isRequired
    };

    componentDidMount() {
        this.props.fetchSkills();
    }
 
    render() {
        const { 
            skills, 
            selectedSkills,
            selectSkill,
            unselectSkill,
            clearSkillSelections,
            classes
        } = this.props;

        const showClearSelectionsButton = selectedSkills.length > 0;
        const clearFiltersLabel = selectedSkills.length === 1 ? 'clear filter' : 'clear filters';

        return (
            <div style={{marginBottom: 24}}>
                <Typography variant="display1" className={classes.title}>
                    skills
                </Typography>

                <div style={{marginBottom: 24}}>
                    {showClearSelectionsButton && 
                        <Fade in={showClearSelectionsButton} timeout={200}>
                            <div style={{display: 'flex', alignItems: 'center'}} onClick={clearSkillSelections}>
                                <Typography>
                                    {clearFiltersLabel}
                                </Typography>

                                <ClearIcon className={classes.clearSelectionsIcon} />
                            </div>
                        </Fade>
                    }

                    {!showClearSelectionsButton && 
                        <Fade in={!showClearSelectionsButton} timeout={200}>
                            <div>
                                <Typography>
                                    select a skill to filter projects
                                </Typography>
                            </div>
                        </Fade>
                    }
                </div>

                <div style={{display: 'flex', alignItems: 'center', flexWrap: 'wrap'}}>
                    {skills.map((skill) => (
                        <Skill
                            key={skill.id}
                            skill={skill}
                            selected={selectedSkills.includes(skill.id)}
                            onSelect={selectSkill}
                            onUnselect={unselectSkill}
                            classes={classes}
                        />
                    ))}
                </div>
            </div>
        );
    }

}

class Skill extends PureComponent { 

    static propTypes = {
        skill: PropTypes.shape({
            name: PropTypes.string.isRequired,
            starred: PropTypes.bool,
            visible: PropTypes.bool
        }).isRequired,
        selected: PropTypes.bool.isRequired,
        onSelect: PropTypes.func.isRequired,
        onUnselect: PropTypes.func.isRequired,
        classes: PropTypes.object.isRequired
    };

    onClick = () => {
        const { selected, onSelect, onUnselect, skill } = this.props;
        if (selected) {
            onUnselect(skill);
        } else {
            onSelect(skill);
        }
    }

    render() {
        const { skill, selected, classes } = this.props;
        const avatarStyle = selected ? {backgroundColor: lightBlue[500]} : {};
        const deleteIcon = selected ? <DoneIcon className={classes.selectedIcon} /> : <div style={{paddingLeft: 4}} />;
        const avatar = skill.starred ? <Avatar style={avatarStyle}><StarIcon style={{fill: 'white'}}/></Avatar> : null;
        const classNames = selected ? `${classes.chip} ${classes.selectedChip}` : `${classes.chip}`;
        return !skill.visible 
            ? null 
            : (
                <Chip
                    avatar={avatar}
                    label={skill.name}
                    onClick={this.onClick}
                    onDelete={this.onClick}
                    deleteIcon={deleteIcon}
                    className={classNames}
                />
            );
    }

}

export default composeContainers([ skillsContainer ], withStyles(styles)(Skills));