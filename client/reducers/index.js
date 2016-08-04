import { combineReducers } from 'redux';
import meals from './meals';
import visibilityFilter from './visibilityFilter';

const caloriecounterApp = combineReducers({
  meals,
  visibilityFilter,
});

export default caloriecounterApp;
