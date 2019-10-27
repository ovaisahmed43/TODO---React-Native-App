import React from 'react';
import {StyleSheet, TouchableWithoutFeedback, Image} from 'react-native';
import {View} from 'native-base';
import {tabBarIcons} from '../Constants';

class TabComponent extends React.Component {
  onTabPress = routeName => {
    this.props.navigation.navigate(routeName);
  };

  render() {
    const {navigation} = this.props;
    const {routes, index} = navigation.state;

    return (
      <View style={PageStyle.TabContainer}>
        {routes.map((route, routeKey) => {
          // const icon =
          //   tabBarIcons[index === routeKey ? 'active' : 'inactive'][
          //     route.routeName
          //   ];

          return (
            <TouchableWithoutFeedback
              key={route.key}
              onPress={() => {
                this.onTabPress(route.routeName);
              }}>
              <View style={PageStyle.TabIconContainer}>
                <Image
                  source={tabBarIcons['active'][route.routeName]}
                  resizeMode="contain"
                  style={[
                    PageStyle.TabIcon,
                    {display: index === routeKey ? 'flex' : 'none'},
                  ]}
                />
                <Image
                  source={tabBarIcons['inactive'][route.routeName]}
                  resizeMode="contain"
                  style={[
                    PageStyle.TabIcon,
                    {display: index === routeKey ? 'none' : 'flex'},
                  ]}
                />
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    );
  }
}

const PageStyle = StyleSheet.create({
  TabIcon: {
    height: 20,
    width: 20,
  },
  TabIconContainer: {
    paddingVertical: 15,
    width: '33%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  TabContainer: {
    flexDirection: 'row',
    paddingHorizontal: '20%',
    backgroundColor: '#fff',
    borderTopWidth: 0.3,
    borderTopColor: '#ccc',
  },
});

export default TabComponent;
