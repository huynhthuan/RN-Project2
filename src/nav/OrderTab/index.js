import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import OrderTabCurrent from '../../screen/OrderTabCurrent';
import OrderTabHistory from '../../screen/OrderTabHistory';

const Tab = createMaterialTopTabNavigator();

const OrderTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {fontSize: 14},
        tabBarActiveTintColor: '#001833',
        tabBarInactiveTintColor: '#D8D8D8',
        tabBarIndicatorStyle: {
          backgroundColor: '#001833',
        },

      }}>
      <Tab.Screen
        name="OrderTabCurrent"
        component={OrderTabCurrent}
        options={{
          title: 'Current Order',
        }}
      />
      <Tab.Screen
        name="OrderTabHistory"
        component={OrderTabHistory}
        options={{
          title: 'Order History',
        }}
      />
    </Tab.Navigator>
  );
};

export default OrderTab;

const styles = StyleSheet.create({});
