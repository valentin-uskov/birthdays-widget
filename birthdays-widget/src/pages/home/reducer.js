import moment from 'moment';

import {
    LOAD_USERS,
    REQUEST,
    SUCCESS,
    FAILURE,
} from './constants';

const initialState = {
    loaded: false,
    todayBirthdays: [],
    pastBirthdays: [],
    upcomingBirthdays: [],
};

const reducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        case LOAD_USERS + REQUEST:
            return {
                ...state,
                loaded: false,
            };
        case LOAD_USERS + SUCCESS:

            const isFebruary28Today = moment().format('MM.DD') === moment('02.28').format('MM.DD');
            const isLeapYear = moment().isLeapYear();

            const todayBirthdays = payload.users
                .filter(user => {
                    if (isFebruary28Today && !isLeapYear) {
                        return moment(user.birthday).format('MMDD') === moment().format('MMDD')
                            || moment(user.birthday).format('MMDD') === moment().add(1, 'd').format('MMDD');
                    } else {
                        return moment(user.birthday).format('MMDD') === moment().format('MMDD');
                    }
                })
                .sort( (a, b) => {
                    return moment(a.birthday).format('MMDD') - moment(b.birthday).format('MMDD')
                        || a.name.localeCompare(b.name);
                });

            const pastBirthdays = payload.users
                .filter(user => {
                    return moment(user.birthday).format('MMDD') < moment().format('MMDD');
                })
                .sort( (a, b) => {
                    return moment(b.birthday).format('MMDD') - moment(a.birthday).format('MMDD')
                        || a.name.localeCompare(b.name);
                });

            const upcomingBirthdays = payload.users
                .filter(user => {
                    if (isFebruary28Today && !isLeapYear) {
                        return moment(user.birthday).format('MMDD') > moment().add(1, 'd').format('MMDD')
                    } else {
                        return moment(user.birthday).format('MMDD') > moment().format('MMDD');
                    }
                })
                .sort( (a, b) => {
                    return moment(a.birthday).format('MMDD') - moment(b.birthday).format('MMDD')
                        || a.name.localeCompare(b.name);
                });

            return {
                ...state,
                todayBirthdays,
                pastBirthdays,
                upcomingBirthdays,
                loaded: true,
            };
        case LOAD_USERS + FAILURE:
            return {
                ...state,
                loaded: false,
                error: action.error,
            };

        default:
            return state;
    }
};

export default reducer;