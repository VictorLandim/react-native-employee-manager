import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import AppWithNavigationState from './navigators/RootNavigator';
import FirebaseInit from './config/FirebaseInit';
import reducers from './reducers';

class App extends Component {
    componentWillMount() {
        FirebaseInit();
    }

    render() {
        const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default App;
