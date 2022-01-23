import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Menu, {IDataCoffee} from '../../screen/Menu';
import OrderOption from '../../screen/OrderOption';
import Barista from '../../screen/Barista';
import CoffeeCountry from '../../screen/CoffeeCountry';
import CoffeeType from '../../screen/CoffeeType';
import Additives from '../../screen/Additives';
import Desginer from '../../screen/Desginer';
import Recommentaion from '../../screen/Recommentation';
import MyOrder from '../../screen/MyOrder';
import {useRoute} from '@react-navigation/core';
import {RootStackParamList} from '../../../App';
import CreateProduct from '../../screen/CreateProduct';

export type StoreStackParamList = {
  Menu: undefined;
  OrderOption: {
    item: IDataCoffee | undefined;
  };
  Barista: undefined;
  CoffeeCountry: undefined;
  CoffeeType: undefined;
  Additives: undefined;
  Desginer: undefined;
  Recommentaion: undefined;
  CreateProduct: undefined;
};

const Stack = createNativeStackNavigator<StoreStackParamList>();

const MenuStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerBackImageSource: require('../../assets/icon/arrow-left.png'),
        headerTintColor: '#001833',
        headerBackTitleVisible: false,
        headerRight: () => {
          return (
            <TouchableOpacity>
              <Image source={require('../../assets/icon/cart.png')}></Image>
            </TouchableOpacity>
          );
        },
      }}>
      <Stack.Screen
        name="Menu"
        component={Menu}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="OrderOption"
        component={OrderOption}
        options={({navigation, route}) => {
          return {
            headerShadowVisible: false,
            title: route?.params?.item?.title,
          };
        }}
      />
      <Stack.Screen
        name="Barista"
        component={Barista}
        options={{
          title: 'Конструктор заказа',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="CoffeeCountry"
        component={CoffeeCountry}
        options={{
          title: 'Конструктор заказа',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="CoffeeType"
        component={CoffeeType}
        options={{
          title: 'Выберите страну',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Additives"
        component={Additives}
        options={{
          title: 'Конструктор заказа',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Desginer"
        component={Desginer}
        options={{
          title: 'Конструктор кофемана',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="Recommentaion"
        component={Recommentaion}
        options={{
          title: 'Конструктор кофемана',
          headerShadowVisible: false,
        }}
      />
      <Stack.Screen
        name="CreateProduct"
        component={CreateProduct}
        options={{
          title: 'CreateProduct',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default MenuStack;

const styles = StyleSheet.create({});
