import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from '../history';
import users from '../pages/home/reducer';

const reducer = combineReducers({
  router: connectRouter(history),
  users,
});

export default reducer;