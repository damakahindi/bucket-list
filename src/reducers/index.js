import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './user';
import SectionReducer from './sections';

export default combineReducers({
  user: userReducer,
  sections: SectionReducer,
  routing: routerReducer,
});
