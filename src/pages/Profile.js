import React from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import {Container, Content, View} from 'native-base';
import AsyncStorage from '@react-native-community/async-storage';

import {connect} from 'react-redux';
import {logout} from '../actions/auth';
import {resetFeed} from '../actions/feed';

// components
import CustomHeader from '../components/CustomHeader';
import CustomButtonOutlined from '../components/CustomButtonOutlined';

class Profile extends React.Component {
  constructor(props) {
    super(props);

    this.onLogoutPress = this.onLogoutPress.bind(this);
    StatusBar.setBackgroundColor('rgba(76, 217, 100, 1)');
  }

  onLogoutPress = async () => {
    AsyncStorage.clear();
    this.props.userLogout();
    this.props.navigation.navigate('Auth');
  };

  render() {
    return (
      <Container>
        <Content contentContainerStyle={PageStyle.ContentContainer}>
          <CustomHeader title={'Hello, ' + this.props.auth.name} />
          <View style={PageStyle.ViewContainer}>
            <CustomButtonOutlined text="Logout" onPress={this.onLogoutPress} />
          </View>
        </Content>
      </Container>
    );
  }
}

const PageStyle = StyleSheet.create({
  ContentContainer: {
    flex: 1,
  },
  ViewContainer: {
    flex: 1,
    padding: 10,
    justifyContent: 'flex-end',
  },
});

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => ({
  userLogout: name => {
    dispatch(logout(name));
    dispatch(resetFeed());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
