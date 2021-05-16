import * as api from '../../api';
import {
  LOAD_USERS,
  // TODAY,
  // PAST,
  // UPCOMING,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './constants';

export const loadUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS + REQUEST });

  try {
    const { users } = await api.loadUsers();
    dispatch({ type: LOAD_USERS + SUCCESS, payload: { users } });
  } catch (error) {
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
};

