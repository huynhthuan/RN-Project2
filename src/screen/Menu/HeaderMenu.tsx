import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Header } from '@react-navigation/elements';
import { NavigationProp, useNavigation } from '@react-navigation/core';
import { RootStackParamList } from '../../../App';

const HeaderMenu = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()
  return (
    <Header
      title=''
      headerStyle={{}}
      headerLeft={() => {
        return (
          <View
            style={{
              paddingLeft: 26,
            }}>
            <Text style={{ fontSize: 14, color: '#D8D8D8' }}>
              Добро пожаловать!
            </Text>
            <Text style={{ fontSize: 18, color: '#001833', fontWeight: '600' }}>
              Алексей
            </Text>
          </View>
        );
      }}
      headerRight={() => {
        return (
          <View style={{ flexDirection: 'row', paddingRight: 26 }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/icon/cartbasket.png')}></Image>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Profile');
              }}>
              <Image
                style={{ marginLeft: 20 }}
                source={require('../../assets/icon/profile.png')}></Image>
            </TouchableOpacity>
          </View>
        );
      }}></Header>
  );
};

export default HeaderMenu;

const styles = StyleSheet.create({});
