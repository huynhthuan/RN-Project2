/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import './src/designSystem/assets';
import './src/designSystem/colors';
import './src/designSystem/space';
import './src/designSystem/typo';

AppRegistry.registerComponent(appName, () => App);
