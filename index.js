/**
 * @format
 */
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

import { NativeModules } from 'react-native';

const { UIManager } = NativeModules;

if (UIManager) {
// Add gesture specific events to genericDirectEventTypes object exported from UIManager
// native module.
// Once new event types are registered with react it is possible to dispatch these
// events to all kind of native views.
    UIManager.genericDirectEventTypes = {
        ...UIManager.genericDirectEventTypes,
        onGestureHandlerEvent: { registrationName: 'onGestureHandlerEvent' },
        onGestureHandlerStateChange: {
            registrationName: 'onGestureHandlerStateChange',
        },
    };
}

AppRegistry.registerComponent(appName, () => App);
