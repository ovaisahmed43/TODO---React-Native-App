import React from 'react';
import {StyleSheet} from 'react-native';
import {Textarea} from 'native-base';

class CustomTextarea extends React.Component {
  render() {
    const {
      value = null,
      placeholder = '',
      onChangeText = text => console.warn(text),
      style,
    } = this.props;

    return (
      <Textarea
        rowSpan={5}
        bordered
        placeholder={placeholder}
        placeholderTextColor={'rgba(155,155,155,1)'}
        onChangeText={onChangeText}
        value={value}
        style={[PageStyle.TextareaStyle, style]}
      />
    );
  }
}

const PageStyle = StyleSheet.create({
  TextareaStyle: {
    fontSize: 14,
    margin: 5,
    backgroundColor: 'rgba(255,255,255,1)',
    borderRadius: 4,
    borderColor: 'rgba(238,238,238,1)',
    paddingLeft: 5,
  },
});

export default CustomTextarea;
