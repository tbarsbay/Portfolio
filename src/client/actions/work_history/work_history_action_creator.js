import { dispatch } from '../../store';
import PortfolioService from '../../../common/services';
import * as actions from './work_history_actions';

export function fetchWorkHistory() {
    dispatch(actions.fetchWorkHistoryRequest());

    return PortfolioService.fetchWorkHistory()
        .then((workHistory) => {
            if (workHistory) {
                dispatch(actions.fetchWorkHistorySuccess({ workHistory }));
            } else {
                dispatch(actions.fetchWorkHistoryFailure(new Error('Failed to get work history.')));
            }
        })
        .catch(error => {
            dispatch(actions.fetchWorkHistoryFailure(error));
        });
}