import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import userReducer from './user';
import SectionReducer from './sections';
import BucketReducer from './buckets';

export default combineReducers({
  user: userReducer,
  buckets: BucketReducer,
  sections: SectionReducer,
  routing: routerReducer,
});
