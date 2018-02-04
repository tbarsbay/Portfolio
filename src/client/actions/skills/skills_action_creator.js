import { dispatch } from '../../store';
import PortfolioService from '../../../common/services';
import * as actions from './skills_actions';

export function fetchSkills() {
    dispatch(actions.fetchSkillsRequest());

    return PortfolioService.fetchSkills()
        .then((skills) => {
            if (skills) {
                dispatch(actions.fetchSkillsSuccess({ skills }));
            } else {
                dispatch(actions.fetchSkillsFailure(new Error(`Failed to fetch skills`)));
            }
        })
        .catch((error) => {
            dispatch(actions.fetchSkillsFailure(error));
        });
}