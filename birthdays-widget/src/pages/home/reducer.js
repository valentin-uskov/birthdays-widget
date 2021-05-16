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

            // FIXME - refactoring and move me anywhere ?

            const todayBirthdays = payload.users
                .filter( user =>
                    moment(user.birthday).format('DD.MM') === moment().format('DD.MM')
                );
            const pastBirthdays = payload.users;
            const upcomingBirthdays = payload.users;

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