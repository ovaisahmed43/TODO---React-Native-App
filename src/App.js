import React from 'react';
import {Root} from 'native-base';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

import TabComponent from './components/TabComponent';

// Pages
import AuthLoading from './pages/AuthLoading';
import Login from './pages/Login';
import Feed from './pages/Feed';
import Add from './pages/Add';
import Profile from './pages/Profile';

import rootReducer from './reducers';
const store = createStore(rootReducer);

const TabNavigator = createBottomTabNavigator(
  {
    Feed,
    Add,
    Profile,
  },
  {
    initialRouteName: 'Feed',
    tabBarComponent: props => {
      return <TabComponent {...props} />;
    },
  },
);

const AppContainer = createAppContainer(
  createSwitchNavigator({
    AuthLoading: AuthLoading,
    App: TabNavigator,
    Auth: Login,
  }),
);

export default () => {
  return (
    <Root>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Root>
  );
};
