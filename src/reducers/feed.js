import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = [];

const feed = (state = INITIAL_STATE, action) => {
  let new_state = [];
  switch (action.type) {
    case 'ADD_FEED':
      new_state = [
        {
          text: action.text,
          expiry: action.expiry,
          color: action.color,
          completed: false,
        },
        ...state,
      ];

      updateLocalStorage(new_state);

      return new_state;
    case 'RESTORE_FEED':
      return action.feed;
    case 'TOGGLE_FEED':
      new_state = state.map((feedItem, feedItemKey) =>
        feedItemKey === action.id
          ? {...feedItem, completed: !feedItem.completed}
          : feedItem,
      );

      updateLocalStorage(new_state);

      return new_state;
    case 'REMOVE_FEED':
      new_state = state.filter(
        (feedItem, feedItemKey) => feedItemKey !== action.id,
      );

      updateLocalStorage(new_state);

      return new_state;
    case 'RESET_FEED':
      return INITIAL_STATE;
    default:
      return state;
  }
};

const updateLocalStorage = async new_feed => {
  await AsyncStorage.setItem('feed', JSON.stringify(new_feed));
};

export default feed;
