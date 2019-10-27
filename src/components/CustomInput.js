import React from 'react';
import {StyleSheet} from 'react-native';
import {Input} from 'native-base';

class CustomInput extends React.Component {
  render() {
    const {
      value = null,
      placeholder = '',
      onChangeText = text => console.warn(text),
      style,
      autoFocus = false,
      onTouchEnd = null,
    } = this.props;

    return (
      <Input
        placeholder={placeholder}
        placeholderTextColor={'rgba(155,155,155,1)'}
        keyboardType="default"
        keyboardAppearance="default"
        value={value}
        onChangeText={onChangeText}
        style={[PageStyle.InputStyle, style]}
        autoFocus={autoFocus}
        onTouchEnd={onTouchEnd}
      />
    );
  }
}

const PageStyle = StyleSheet.create({
  InputStyle: {
    fontSize: 14,
    margin: 5,
    height: 48,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 4,
    borderColor: 'rgba(238,238,238,1)',
    borderWidth: 1,
  },
});

export default CustomInput;
