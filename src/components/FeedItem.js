import React from 'react';
import {StyleSheet, Alert} from 'react-native';
import {View, Icon, Text} from 'native-base';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Swipeable from 'react-native-gesture-handler/Swipeable';

import {connect} from 'react-redux';
import {toggleFeed, removeFeed} from '../actions/feed';

class FeedItem extends React.Component {
  onLeftPress = () => {
    this.swipeable.close();
    Alert.alert(
      'Delete',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          onPress: this.swipeable.close,
          style: 'cancel',
        },
        {
          text: 'OK',
          onPress: () => {
            const {index} = this.props;
            this.props.removeFeed(index);
          },
        },
      ],
      {cancelable: false},
    );
  };

  onRightPress = async () => {
    this.swipeable.close();
    const {index} = this.props;
    await this.props.toggleFeed(index);
  };

  renderLeftActions = () => {
    return (
      <TouchableWithoutFeedback
        onPress={this.onLeftPress}
        style={PageStyle.SwipeableSideOptionContainer}>
        <Icon name="trash" style={PageStyle.TrashColor} />
      </TouchableWithoutFeedback>
    );
  };

  renderRightActions = () => {
    return (
      <TouchableWithoutFeedback
        onPress={this.onRightPress}
        style={PageStyle.SwipeableSideOptionContainer}>
        <Icon name="checkmark" style={PageStyle.CheckColor} />
      </TouchableWithoutFeedback>
    );
  };

  render() {
    const {item} = this.props;

    return (
      <Swipeable
        ref={ref => (this.swipeable = ref)}
        onSwipeableLeftOpen={this.onLeftPress}
        onSwipeableRightOpen={this.onRightPress}
        renderLeftActions={this.renderLeftActions}
        renderRightActions={this.renderRightActions}>
        <View style={PageStyle.SwipeableContainer}>
          <View style={PageStyle.SwipeableColorContainer}>
            <View
              style={[PageStyle.SwipeableColor, {backgroundColor: item.color}]}
            />
          </View>
          <View style={PageStyle.SwipeableTextContainer}>
            <Text
              numberOfLines={1}
              style={PageStyle.SwipeableMainTextContainer}>
              {item.text}
            </Text>
            <Text
              style={[
                PageStyle.SwipeableSubTextContainer,
                item.completed ? PageStyle.TextLineThrough : {},
              ]}>
              {item.expiry}
            </Text>
          </View>
        </View>
      </Swipeable>
    );
  }
}

const PageStyle = StyleSheet.create({
  SwipeableContainer: {
    padding: 5,
    paddingHorizontal: 15,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },
  SwipeableColorContainer: {
    justifyContent: 'center',
    width: 20,
    marginRight: 10,
  },
  SwipeableColor: {
    height: 17,
    width: 17,
    borderRadius: 50,
    paddingHorizontal: 5,
  },
  SwipeableTextContainer: {
    flex: 1,
  },
  SwipeableMainTextContainer: {
    color: 'rgba(0,0,0,1)',
    fontSize: 18,
  },
  SwipeableSubTextContainer: {
    color: 'rgba(74,74,74,1)',
    fontSize: 12,
  },
  TextLineThrough: {
    textDecorationLine: 'line-through',
  },
  SwipeableSideOptionContainer: {
    width: 50,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  TrashColor: {
    color: 'rgba(255,59,48,1)',
  },
  CheckColor: {
    color: 'rgba(76,217,100,1)',
  },
});

const mapStateToProps = state => {
  return {
    // feed: state.feed,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleFeed: id => dispatch(toggleFeed(id)),
  removeFeed: id => dispatch(removeFeed(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FeedItem);
