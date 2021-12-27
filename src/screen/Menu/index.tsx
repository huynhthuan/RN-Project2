import { useNavigation } from '@react-navigation/core';
import React from 'react';
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
import { RootStackParamList } from '../../../App';

export interface IDataCoffee {
  id: string,
  title: string,
  image: ImageSourcePropType
}

const { height, width } = Dimensions.get('window');

const spacing = 26;

const widthItem = (width - spacing * 2 - 16) / 2;
const heightItem = (widthItem / 154) * 164;

const dataCoffee = [
  {
    id: '0',
    title: 'Американо1',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '1',
    title: 'Американо2',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '2',
    title: 'Американо3',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '3',
    title: 'Американо4',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '4',
    title: 'Американо5',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '5',
    title: 'Американо6',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '6',
    title: 'Американо7',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '7',
    title: 'Американо8',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '8',
    title: 'Американо9',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '9',
    title: 'Американо10',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '10',
    title: 'Американо11',
    image: require('../../assets/icon/item_coffee.png'),
  },
  {
    id: '11',
    title: 'Американо12',
    image: require('../../assets/icon/item_coffee.png'),
  },
];

import HeaderMenu from './HeaderMenu';
import ItemMenu from './ItemMenu';

const Menu = () => {
  const [data, setdata] = React.useState<IDataCoffee[]>([]);

  const getData = React.useCallback(() => {
    setTimeout(() => {
      setdata(dataCoffee);
      setLoading(false);
    }, 2000)
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
      {
        loading ? (
          <View style={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            <ActivityIndicator></ActivityIndicator>
          </View>
        ) : (
          <View style={styles.content}>
            <FlatList
              data={data}
              renderItem={({ item, index }) => {
                return <ItemMenu item={item} index={index}></ItemMenu>;
              }}
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.contentContainerStyle}
              ListHeaderComponent={() => {
                return (
                  <Text style={styles.listHeaderComponent}>Выберите Ваш кофе</Text>
                );
              }}
              numColumns={2}></FlatList>
          </View>
        )
      }
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
