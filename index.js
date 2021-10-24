/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SplashScreen from './src/screen/SplashScreen';
import Welcome from './src/screen/Welcome';
import Authorization from './src/screen/Authorization';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Authorization);
