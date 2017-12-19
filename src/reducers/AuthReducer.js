import {
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
    LOGIN_USER_SUCCESS,
    LOGIN_USER_FAIL,
    LOGIN_USER
} from '../actions/types';

const DEFAULT_STATE = {
    email: '',
    password: '',
    user: null,
    error: '',
    loading: false
};

export default (state = DEFAULT_STATE, action) => {
    console.log(action);

    switch (action.type) {
        case EMAIL_CHANGED:
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        case LOGIN_USER:
            return { ...state, loading: true, error: '' };
        case LOGIN_USER_SUCCESS:
            return { ...state, ...DEFAULT_STATE, user: action.payload };
        case LOGIN_USER_FAIL:
            return { ...state, error: action.payload, loading: false, password: '' };
        default:
            return state;
    }
};
