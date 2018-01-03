import { NavigationActions } from 'react-navigation';
import {
    LOGIN_USER_SUCCESS,
    EMPLOYEE_CREATE,
    EMPLOYEE_SAVE,
    EMPLOYEE_REMOVE
} from '../actions/types';
import { RootNavigator } from '../navigators/RootNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialNavState = RootNavigator.router.getStateForAction(firstAction);

export default (state = initialNavState, action) => {
    console.log(action);

    switch (action.type) {
        case LOGIN_USER_SUCCESS:
        case EMPLOYEE_CREATE:
        case EMPLOYEE_SAVE:
        case EMPLOYEE_REMOVE:
            return RootNavigator.router.getStateForAction(
                        NavigationActions.navigate({ routeName: 'List' }),
                        state
                      );

        default:
            return RootNavigator.router.getStateForAction(action, state);
    }
};
