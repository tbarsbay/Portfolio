import { combineReducers } from 'redux';
import projectsReducer from './projects_reducer';

const reducer = combineReducers({
    projects: projectsReducer
});

export default reducer;