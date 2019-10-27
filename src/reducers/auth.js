import AsyncStorage from '@react-native-community/async-storage';

const INITIAL_STATE = {
  name: '',
};

const auth = (state = INITIAL_STATE, action) => {
  let new_state;
  switch (action.type) {
    case 'LOGIN':
      new_state = {
        name: action.name,
      };

      updateLocalStorage(new_state);

      return new_state;
    case 'LOGOUT':
      return INITIAL_STATE;
    default:
      return state;
  }
};

const updateLocalStorage = async name => {
  await AsyncStorage.setItem('name', JSON.stringify(name));
};

export default auth;
