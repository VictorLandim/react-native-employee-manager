import React from 'react';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';
import LoginForm from '../components/LoginForm';
import EmployeeList from '../components/EmployeeList';
import EmployeeCreate from '../components/EmployeeCreate';

export const RootNavigator = StackNavigator({
    Login: {
        screen: LoginForm
    },
    List: {
        screen: EmployeeList
    },
    Create: {
        screen: EmployeeCreate
    }
});

const AppWithNavigationState = ({ dispatch, nav }) => {
    return (
        <RootNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    );
};

const mapStateToProps = (state) => {
    return {
        nav: state.nav
    };
};

export default connect(mapStateToProps)(AppWithNavigationState);
