import { connect } from 'react-redux';

import { skillsActions, skillsActionCreator } from '../actions/skills';

function mapStateToProps({ skills }) {
    return skills;
}

function mapDispatchToProps(dispatch) {
    return {
        fetchSkills: skillsActionCreator.fetchSkills,
        selectSkill: (skill) => { dispatch(skillsActions.selectSkill({ skill })) },
        unselectSkill: (skill) => { dispatch(skillsActions.unselectSkill({ skill })) },
        clearSkillSelections: () => { dispatch(skillsActions.clearSkillSelections()) }
    };
}

export default connect(mapStateToProps, mapDispatchToProps);