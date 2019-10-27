import React from 'react';
import {StatusBar} from 'react-native';
import {Container, Content, View} from 'native-base';
import FeedItem from '../components/FeedItem';

import {connect} from 'react-redux';
import CustomHeader from '../components/CustomHeader';

class Feed extends React.Component {
  constructor(props) {
    super(props);

    StatusBar.setBackgroundColor('rgba(76, 217, 100, 1)');
  }

  render() {
    return (
      <Container>
        <Content>
          <CustomHeader title="Todo" />
          <View style={{paddingVertical: 5}}>
            {this.props.feed.map((feedItem, feedItemKey) => {
              return (
                <FeedItem
                  key={feedItemKey}
                  item={feedItem}
                  index={feedItemKey}
                />
              );
            })}
          </View>
        </Content>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth,
    feed: state.feed,
  };
};

export default connect(mapStateToProps)(Feed);
