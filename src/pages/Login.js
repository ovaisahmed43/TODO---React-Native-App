import React from 'react';
import {StyleSheet, StatusBar, Image} from 'react-native';
import {Container, Content, View, Text, Toast} from 'native-base';

import {connect} from 'react-redux';
import {login} from '../actions/auth';

// Images
import LoginTickImage from '../assets/login-tick.png';

// components
import CustomButtonFilled from '../components/CustomButtonFilled';
import CustomInput from '../components/CustomInput';

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
    };

    this.onLoginPress = this.onLoginPress.bind(this);
    StatusBar.setBackgroundColor('rgba(76, 217, 100, 1)');
  }

  onLoginPress = async () => {
    const {name} = this.state;

    if (/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/.test(name)) {
      this.props.userLogin(name);
      this.props.navigation.navigate('App');
    } else {
      Toast.show({
        text: 'Please enter a valid name',
        type: 'warning',
      });
    }
  };

  render() {
    return (
      <Container>
        <Content
          scrollEnabled={false}
          contentContainerStyle={PageStyle.ContentContainer}>
          <View>
            <Image
              source={LoginTickImage}
              resizeMode="contain"
              style={PageStyle.Logo}
            />
            <Text style={PageStyle.Title}>ToDo</Text>
          </View>

          <View style={PageStyle.InputContainer}>
            <CustomInput
              placeholder={'Name'}
              vale={null}
              onChangeText={name => {
                this.setState({name});
              }}
              style={null}
              autoFocus={true}
            />

            <CustomButtonFilled text={'Login'} onPress={this.onLoginPress} />
          </View>
        </Content>
      </Container>
    );
  }
}

const PageStyle = StyleSheet.create({
  ContentContainer: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  Logo: {
    maxHeight: 100,
    width: '100%',
    marginVertical: 5,
  },
  Title: {
    marginVertical: 5,
    textAlign: 'center',
    backgroundColor: 'transparent',
    color: 'rgba(0,0,0,1)',
    fontSize: 24,
  },
  InputContainer: {
    padding: 10,
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
});

const mapStateToProps = state => {
  return {
    auth: state.auth,
  };
};

const mapDispatchToProps = dispatch => ({
  userLogin: name => dispatch(login(name)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
