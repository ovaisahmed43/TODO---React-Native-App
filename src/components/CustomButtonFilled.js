import React from 'react';
import {StyleSheet} from 'react-native';
import {Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

class CustomButtonFilled extends React.Component {
  render() {
    const {
      text = 'Button',
      onPress = null,
      style = {},
      textStyle = {},
    } = this.props;

    return (
      <TouchableOpacity
        onPress={onPress}
        style={[PageStyle.ButtonStyle, style]}>
        <Text style={[PageStyle.ButtonTextStyle, textStyle]}>{text}</Text>
      </TouchableOpacity>
    );
  }
}

const PageStyle = StyleSheet.create({
  ButtonStyle: {
    margin: 5,
    height: 48,
    backgroundColor: 'rgba(76,217,100,1)',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ButtonTextStyle: {
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 14,
  },
});

export default CustomButtonFilled;
