import {
    EMPLOYEE_FETCH,
    EMPLOYEE_FETCHING
} from '../actions/types';

const INITIAL_STATE = {
    isLoading: false,
    list: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMPLOYEE_FETCHING:
          return { ...state, isLoading: true };
        case EMPLOYEE_FETCH:
            return { list: action.payload, isLoading: false };
        default:
            return state;
    }
};
