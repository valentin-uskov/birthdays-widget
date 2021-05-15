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
            // const { [payload.id]: value, ...withoutDeleted } = state.entities;

            return {
                ...state,
                todayBirthdays: [],
                pastBIrthtodayBirthdays: [],
                upcomingBIrthtodayBirthdays: [],
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