import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import {View} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

const {width} = Dimensions.get('window');
const circleWidth = (width - 20) / 5;

class CircularColor extends React.Component {
  render() {
    const {color, selected = false, onPress = null} = this.props;

    return (
      <TouchableWithoutFeedback
        onPress={onPress}
        style={PageStyle.CircleContainer}>
        <View
          style={[
            PageStyle.Circle,
            {backgroundColor: color, opacity: selected ? 1 : 0.25},
          ]}
        />
      </TouchableWithoutFeedback>
    );
  }
}

const PageStyle = StyleSheet.create({
  CircleContainer: {
    height: circleWidth,
    width: circleWidth,
    padding: 5,
  },
  Circle: {
    flex: 1,
    borderRadius: 50,
  },
});

export default CircularColor;
