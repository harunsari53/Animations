/**
 * @format
 */

import {AppRegistry} from 'react-native';
import Router from './src/routers/Router';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Router);
