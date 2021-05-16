import * as api from '../../api';
import moment from 'moment';
import {
  LOAD_USERS,
  REQUEST,
  SUCCESS,
  FAILURE,
} from './constants';

export const loadUsers = () => async (dispatch) => {
  dispatch({ type: LOAD_USERS + REQUEST });

  try {
    const isFebruary28Today = moment().format('MM.DD') === moment('05.28').format('MM.DD');
    const isLeapYear = moment().isLeapYear();
    const daysBeforeAmount = 14;
    const daysAfterAmount = (isFebruary28Today && !isLeapYear) ? 15 : 14;
    const dateFrom = moment().subtract(daysBeforeAmount, 'd').format('MM.DD');
    const dateTo = moment().add(daysAfterAmount,'d').format('MM.DD');

    const { users } = await api.loadUsers(dateFrom, dateTo);

    dispatch({ type: LOAD_USERS + SUCCESS, payload: { users } });
  } catch (error) {
    dispatch({ type: LOAD_USERS + FAILURE, error });
  }
};

