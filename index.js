/**
 * @format
 */
import 'react-native-gesture-handler'; // https://github.com/kmagiera/react-native-gesture-handler/issues/320
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
