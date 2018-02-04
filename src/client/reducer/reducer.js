import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';
import skillsReducer from './skills_reducer';

const reducer = combineReducers({
    projects: projectsReducer,
    skills: skillsReducer
});

export default reducer;