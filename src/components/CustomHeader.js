import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text} from 'native-base';

class CustomHeader extends React.Component {
  render() {
    const {title = 'Title'} = this.props;

    return (
      <View style={PageStyle.HeaderStyle}>
        <Text style={PageStyle.HeaderTextStyle}>{title}</Text>
      </View>
    );
  }
}

const PageStyle = StyleSheet.create({
  HeaderStyle: {
    height: 96,
    backgroundColor: 'rgba(76,217,100,1)',
    justifyContent: 'flex-end',
  },
  HeaderTextStyle: {
    padding: 15,
    backgroundColor: 'transparent',
    color: 'rgba(255,255,255,1)',
    fontSize: 32,
    lineHeight: 32,
  },
});

export default CustomHeader;
