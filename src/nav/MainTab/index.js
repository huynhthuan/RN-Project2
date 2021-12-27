import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MyTabBar from '../../components/MyTabBar';

import Reward from '../../../src/screen/Reward';
import MyOrderCurrent from '../../../src/screen/MyOrderCurrent';
import OrderTab from '../OrderTab';
import MenuStack from '../MenuStack';

const Tab = createBottomTabNavigator();

const MainTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#324A59',
        tabBarInactiveTintColor: '#D8D8D8',
      }}
      tabBar={props => <MyTabBar {...props} />}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/icon/menu-active.png')}
              style={{
                tintColor: color,
              }}
            />
          ),
        }}
        name="MenuStack"
        component={MenuStack}
      />
      <Tab.Screen
        options={{
          headerTitleAlign: 'center',
          headerShown: true,
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/icon/reward-active.png')}
              style={{
                tintColor: color,
              }}
            />
          ),
        }}
        name="Reward"
        component={Reward}
      />
      <Tab.Screen
        options={{
          headerShown: true,
          headerTitleAlign: 'center',
          title: 'Orders',
          tabBarIcon: ({focused, color, size}) => (
            <Image
              source={require('../../assets/icon/order-active.png')}
              style={{
                tintColor: color,
              }}
            />
          ),
        }}
        name="OrderTab"
        component={OrderTab}
      />
    </Tab.Navigator>
  );
};

export default MainTab;

const styles = StyleSheet.create({});
