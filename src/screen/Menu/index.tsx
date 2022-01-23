import {NavigationProp, useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  Modal,
  TouchableOpacity,
  ImageSourcePropType,
  ActivityIndicator,
} from 'react-native';
import {RootStackParamList} from '../../../App';
import api from '../../api';
import {productsReceived} from '../../controller/productStoreSlice';
import {useAppDispatch, useAppSelector} from '../../controller/store';
import {StoreStackParamList} from '../../nav/MenuStack';

export interface IDataCoffee {
  id: string;
  name: string;
  avatar: ImageSourcePropType;
}

const {height, width} = Dimensions.get('window');

const spacing = 26;

const widthItem = (width - spacing * 2 - 16) / 2;
const heightItem = (widthItem / 154) * 164;

import HeaderMenu from './HeaderMenu';
import ItemMenu from './ItemMenu';

const Menu = () => {
  const navigation = useNavigation<NavigationProp<StoreStackParamList>>();
  const [data, setdata] = React.useState<IDataCoffee[]>([]);
  const idsProduct = useAppSelector(state => state.productsSlice.ids);
  const dispatch = useAppDispatch();

  const getData = React.useCallback(async () => {
    try {
      const res = await fetch(api.getProduct, {
        method: 'GET',
      });
      const resToJson = await res.json();
      setdata(resToJson);
      dispatch(
        productsReceived({
          products: resToJson,
        }),
      );
      setLoading(false);
      console.log(resToJson);
    } catch (error) {
      console.log(error);
    }
  }, []);

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    console.log('user efffect 2');
  }, [data]);

  const [loading, setLoading] = React.useState<boolean>(true);

  return (
    <View style={styles.container}>
      <HeaderMenu />
      {loading ? (
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ActivityIndicator></ActivityIndicator>
        </View>
      ) : (
        <View style={styles.content}>
          <FlatList
            data={idsProduct}
            renderItem={({item, index}) => {
              return <ItemMenu id={item} index={index}></ItemMenu>;
            }}
            keyExtractor={(item, index) => index.toString()}
            contentContainerStyle={styles.contentContainerStyle}
            ListHeaderComponent={() => {
              return (
                <Text style={styles.listHeaderComponent}>
                  Выберите Ваш кофе
                </Text>
              );
            }}
            numColumns={2}></FlatList>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('CreateProduct');
            }}
            style={{
              width: 50,
              height: 50,
              borderRadius: 100,
              backgroundColor: 'black',
              position: 'absolute',
              bottom: 100,
              right: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={{fontSize: 20, color: '#fff'}}>+</Text>
          </TouchableOpacity>
        </View>
      )}
      {/* <Modal animationType={'slide'} transparent={true}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(0, 0, 0, 0.16)',
            paddingHorizontal: 8,
          }}>
          <View
            style={{
              borderRadius: 13,
              backgroundColor: '#fff',
              width: width - 16,
            }}>
            <View
              style={{
                paddingVertical: 18,
                paddingHorizontal: 16,
                borderBottomColor: '#C7C7CC',
                borderBottomWidth: 1,
              }}>
              <Text
                style={{
                  fontWeight: '900',
                  fontSize: 20,
                  lineHeight: 24,
                  textAlign: 'center',
                }}>
                Заказ выполнен.
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  lineHeight: 24,
                  textAlign: 'center',
                }}>
                Пожалуйста, оцените сервис.
              </Text>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 18,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#C7C7CC',
                borderBottomWidth: 1,
              }}>
              <Image
                style={{marginHorizontal: 15}}
                source={require('../../assets/img/star.png')}></Image>
              <Image
                style={{marginHorizontal: 15}}
                source={require('../../assets/img/star.png')}></Image>
              <Image
                style={{marginHorizontal: 15}}
                source={require('../../assets/img/star.png')}></Image>
              <Image
                style={{marginHorizontal: 15}}
                source={require('../../assets/img/star.png')}></Image>
              <Image
                style={{marginHorizontal: 15}}
                source={require('../../assets/img/star.png')}></Image>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 18,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                borderBottomColor: '#C7C7CC',
                borderBottomWidth: 1,
              }}>
              <Text>Напомнить позже</Text>
            </View>
            <View
              style={{
                paddingHorizontal: 20,
                paddingVertical: 18,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text>Нет, спасибо</Text>
            </View>
          </View>
        </View>
      </Modal> */}
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#324A59',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: 7,
  },
  contentContainerStyle: {
    paddingHorizontal: spacing,
    paddingBottom: 100,
  },
  listHeaderComponent: {
    fontSize: 16,
    color: '#D8D8D8',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 24,
  },
});
