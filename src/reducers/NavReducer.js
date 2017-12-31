import { NavigationActions } from 'react-navigation';
import { LOGIN_USER_SUCCESS, EMPLOYEE_CREATE } from '../actions/types';
import { RootNavigator } from '../navigators/RootNavigator';

const firstAction = RootNavigator.router.getActionForPathAndParams('Login');
const initialNavState = RootNavigator.router.getStateForAction(firstAction);

export default (state = initialNavState, action) => {
    console.log(action);

    switch (action.type) {
        case LOGIN_USER_SUCCESS:
            return RootNavigator.router.getStateForAction(
                        NavigationActions.navigate({ routeName: 'List' }),
                        state
                      );
        case EMPLOYEE_CREATE:
            return RootNavigator.router.getStateForAction(
                        NavigationActions.navigate({ routeName: 'List' }),
                        state
                      );
        default:
            return RootNavigator.router.getStateForAction(action, state);
    }
};
