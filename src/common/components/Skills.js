import React, { Component } from 'react';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import StarIcon from 'material-ui-icons/Star';
import PropTypes from 'prop-types';
import { getSkillGroups } from '../api/skills';
import { lightBlue } from 'material-ui/colors';

class Skills extends Component {

    onSkillClicked(skill) {
        console.log(`on skill clicked: ${skill.name}`);
        //TODO
    }

    renderSkillGroups(groups) {
        return groups.map((group) => (
            <SkillGroup key={group.id} group={group} onSkillClicked={this.onSkillClicked} />
        ));
    }

    render() {
        const skillGroups = getSkillGroups();
        return (
            <div style={{padding: 16}}>
                {this.renderSkillGroups(skillGroups)}
            </div>
        )
    }
}

class SkillGroup extends Component {
    static propTypes = {
        group: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            skills: PropTypes.array.isRequired
        }),
        onSkillClicked: PropTypes.func.isRequired,
    };

    renderSkills(skills) {
        var { onSkillClicked } = this.props;
        return skills.map((skill) => (
            <Skill key={skill.id} skill={skill} onClick={onSkillClicked} />
        ));
    }

    render() {
        let { name, skills } = this.props.group;
        return (
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 16}}>
                <span style={{fontSize: 12, marginLeft: 4}}>{name}</span>
                <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
                    {this.renderSkills(skills)}
                </div>
            </div>
        );
    }
}

class Skill extends Component {
    static propTypes = {
        skill: PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            starred: PropTypes.bool.isRequired
        }),
        onClick: PropTypes.func,
    };

    render() {
        let { skill, onClick } = this.props;
        return (
            <div style={{display: 'flex', flexDirection: 'row', margin: 4}}>
                <Chip
                    avatar={skill.starred &&
                        <Avatar>
                            <StarIcon />
                        </Avatar>}
                    label={skill.name}
                    onClick={() => onClick(skill)}
                    style={{fontSize: 10, background: lightBlue[100]}} />
            </div>
        );
    }
}

export default Skills;
