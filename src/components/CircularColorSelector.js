import React from 'react';
import {StyleSheet} from 'react-native';
import {View} from 'native-base';
import {colors} from '../Constants';
import CircularColor from './CircularColor';

class CircularColorSelector extends React.Component {
  render() {
    const {selectedColor = colors[0], onPress = null} = this.props;

    return (
      <View style={PageStyle.SelectorContainer}>
        {colors.map((color, colorKey) => {
          return (
            <CircularColor
              key={colorKey}
              color={color}
              selected={selectedColor === color}
              onPress={() => onPress(color)}
            />
          );
        })}
      </View>
    );
  }
}

const PageStyle = StyleSheet.create({
  SelectorContainer: {
    marginVertical: 5,
    flexDirection: 'row',
    paddingVertical: 10,
  },
});

export default CircularColorSelector;
