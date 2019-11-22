import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import skillsReducer from './skills_reducer';
import workHistoryReducer from './work_history_reducer';

const reducer = combineReducers({
    projects: projectsReducer,
    skills: skillsReducer,
    workHistory: workHistoryReducer
});

export default reducer;