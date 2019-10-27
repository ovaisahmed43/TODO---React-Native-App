import React from 'react';
import {StyleSheet, StatusBar, InteractionManager} from 'react-native';
import {View, Spinner} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {login, logout} from '../actions/auth';
import {restoreFeed} from '../actions/feed';

class AuthLoading extends React.Component {
  componentDidMount() {
    StatusBar.setBackgroundColor('rgba(76, 217, 100, 1)');
    InteractionManager.runAfterInteractions(() => {
      this.checkAuthentication();
    });
  }

  async checkAuthentication() {
    const name = await AsyncStorage.getItem('name');
    if (name) {
      this.props.userLogin(JSON.parse(name).name);
      const feed = await AsyncStorage.getItem('feed');
      if (feed) {
        this.props.restoreFeed(JSON.parse(feed));
      }
    } else {
      this.props.userLogout();
    }

    this.props.navigation.navigate(name ? 'App' : 'Auth');
  }

  render() {
    return (
      <View style={PageStyle.LoaderContainer}>
        <Spinner color="#fff" />
      </View>
    );
  }
}

const PageStyle = StyleSheet.create({
  LoaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(76,217,100,1)',
  },
});

const mapStateToProps = state => {
  return {
    auth: state.auth,
    feed: state.feed,
  };
};

const mapDispatchToProps = dispatch => ({
  userLogin: name => dispatch(login(name)),
  userLogout: () => dispatch(logout()),
  restoreFeed: feed => dispatch(restoreFeed(feed)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AuthLoading);
