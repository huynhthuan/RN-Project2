/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Welcome from './src/screen/Welcome';
import Authorization from './src/screen/Authorization';
import ForgotPassword from './src/screen/ForgotPassword';
import Registration from './src/screen/Registration';
import TwoFactorVerification from './src/screen/TwoFactorVerification';
import SelectCoffee from './src/screen/SelectCoffee';
import MainTab from './src/nav/MainTab';
import Profile from './src/screen/Profile';

import {TouchableOpacity, Image, Text, Platform} from 'react-native';
import MyOrder from './src/screen/MyOrder';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {FirebaseAuthTypes} from '@react-native-firebase/auth';

import {Alert} from 'react-native';
import messaging, {
  FirebaseMessagingTypes,
} from '@react-native-firebase/messaging';
import notifee, {Event, Notification} from '@notifee/react-native';
import Config from 'react-native-config';
import {Provider} from 'react-redux';
import store from './src/controller/store';

export type RootStackParamList = {
  Welcome: undefined;
  Authorization: undefined;
  ForgotPassword: undefined;
  Registration: undefined;
  TwoFactorVerification: {confirmation: FirebaseAuthTypes.ConfirmationResult};
  SelectCoffee: undefined;
  MainTab: undefined;
  MyOrder: undefined;
  Profile: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const App = () => {
  const displayNoti = async (notification: Notification) => {
    if (Platform.OS === 'ios') {
      notifee.displayNotification(notification);
      return;
    }

    const channelId = await notifee.createChannel({
      id: 'default',
      name: 'Default Channel',
    });

    notifee.displayNotification({
      ...notification,
      android: {
        channelId,
        pressAction: {
          id: 'default',
        },
      },
    });
  };

  const onNotificationOpenedApp = React.useCallback(
    (message: FirebaseMessagingTypes.RemoteMessage) => {
      console.log('onNotificationOpenedApp', message);
    },
    [],
  );

  const getFCMToken = React.useCallback(() => {
    messaging()
      .getToken()
      .then(fcmToken => {
        if (fcmToken) {
          console.log(fcmToken);
        }
      });
  }, []);

  React.useEffect(() => {
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      // Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
      displayNoti({
        title: remoteMessage.notification?.title,
        body: remoteMessage.notification?.body,
      });
    });

    return unsubscribe;
  }, []);

  React.useEffect(() => {
    const unsubscribeOpened = messaging().onNotificationOpenedApp(
      onNotificationOpenedApp,
    );

    const unsubscribeForegroundEvent = notifee.onForegroundEvent(
      ({type, detail}: Event) => {
        console.log('onForegroundEvent', type, detail);
      },
    );

    return () => {
      unsubscribeForegroundEvent();
      unsubscribeOpened();
    };
  }, []);

  React.useEffect(() => {
    getFCMToken();
  }, []);

  messaging().setBackgroundMessageHandler(async remoteMessage => {
    console.log('Message handled in the background!', remoteMessage);
  });

  return (
    <Provider store={store}>
      <GestureHandlerRootView style={{flex: 1}}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={({navigation}) => {
              return {
                headerBackTitleVisible: false,
                headerShadowVisible: false,
                headerLeft: () => {
                  return (
                    <TouchableOpacity
                      style={{
                        marginLeft: 4,
                      }}
                      onPress={() => {
                        navigation.goBack();
                      }}>
                      <Image
                        source={require('./src/assets/icon/arrow-left.png')}></Image>
                    </TouchableOpacity>
                  );
                },
              };
            }}>
            <Stack.Screen
              name="Welcome"
              component={Welcome}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="Authorization"
              options={{
                title: '',
                animation: 'slide_from_right',
              }}
              component={Authorization}
            />
            <Stack.Screen
              name="ForgotPassword"
              component={ForgotPassword}
              options={{
                title: '',
              }}
            />
            <Stack.Screen
              name="Registration"
              component={Registration}
              options={{
                title: '',
              }}
            />
            <Stack.Screen
              name="TwoFactorVerification"
              component={TwoFactorVerification}
              options={{
                title: '',
              }}
            />
            <Stack.Screen
              name="SelectCoffee"
              component={SelectCoffee}
              options={{
                title: '',
                headerTransparent: true,
              }}
            />
            <Stack.Screen
              options={{
                title: '',
                headerShown: false,
              }}
              name="MainTab"
              component={MainTab}
            />
            <Stack.Screen
              name="MyOrder"
              component={MyOrder}
              options={{
                title: '',
                headerShadowVisible: false,
                headerRight: () => {
                  return <></>;
                },
              }}
            />
            <Stack.Screen
              name="Profile"
              component={Profile}
              options={{
                title: 'Профиль',
                headerTitleAlign: 'center',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </GestureHandlerRootView>
    </Provider>
  );
};

export default App;
