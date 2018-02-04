import React, { Component, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Button from 'material-ui/Button';
import { blue } from 'material-ui/colors';

import { composeContainers } from '../../../common/containers';
import { skillsContainer } from '../../containers';

const styles = {};

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

    onClickSkill = skill => () => {
        console.log(`on click skill ${skill.name}`);
    }
 
    render() {
        const { 
            skills, 
            selectedSkills,
            selectSkill,
            unselectSkill,
            clearSkillSelections
        } = this.props;
        return (
            <div>
                <div style={{display: 'flex', flexWrap: 'wrap'}}>
                    {skills.map((skill) => (
                        <Skill key={skill.id}
                            skill={skill}
                            selected={selectedSkills.includes(skill.id)}
                            onSelect={selectSkill}
                            onUnselect={unselectSkill}
                        />
                    ))}
                </div>

                <Button onClick={clearSkillSelections}>
                    {'Clear Selections'}
                </Button>
            </div>
        );
    }

}

class Skill extends PureComponent { 

    static propTypes = {
        skill: PropTypes.shape({
            name: PropTypes.string.isRequired
        }).isRequired,
        selected: PropTypes.bool.isRequired,
        onSelect: PropTypes.func.isRequired,
        onUnselect: PropTypes.func.isRequired
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
        const { skill, selected } = this.props;
        const color = selected ? blue[500] : 'black';
        return (
            <Button onClick={this.onClick} style={{color}}>
                {skill.name}
            </Button>
        );
    }

}

export default composeContainers([ skillsContainer ], withStyles(styles)(Skills));