import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const BaristaItem = ({item, navigation}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CoffeeCountry');
      }}
      style={{
        paddingVertical: 10,
        paddingLeft: 8,
        paddingRight: 32,
        borderRadius: 22,
        elevation: 10,
        marginBottom: 20,
        backgroundColor: '#fff',
        flexDirection: 'row',
      }}>
      <Image
        source={require('../../assets/icon/profile_ava.png')}
        style={{
          borderRadius: 16,
          marginRight: 17,
        }}></Image>
      <View
        style={{
          justifyContent: 'center',
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 15,
            color: '#09051C',
            marginBottom: 8,
          }}>
          {item.name}
        </Text>
        <Text
          style={{
            fontSize: 14,
            color: '#38383830',
          }}>
          {item.des}
        </Text>
      </View>
      <View
        style={{
          width: 16,
          justifyContent: 'center',
        }}>
        <View
          style={{
            width: 16,
            height: 16,
            borderRadius: 8,
            backgroundColor: '#33E545',
          }}></View>
      </View>
    </TouchableOpacity>
  );
};

const baristaData = [
  {
    id: '0',
    uri: '',
    name: 'Виктор',
    des: 'Топ-бариста',
  },
  {
    id: '1',
    uri: '',
    name: 'Андрей',
    des: 'Топ-бариста',
  },
  {
    id: '2',
    uri: '',
    name: 'Вера',
    des: 'Бариста',
  },
  {
    id: '3',
    uri: '',
    name: 'Бариста',
    des: 'Андрей',
  },
  {
    id: '4',
    uri: '',
    name: 'Бариста',
    des: 'Андрей',
  },
  {
    id: '5',
    uri: '',
    name: 'Андрей',
    des: 'Бариста',
  },
  {
    id: '6',
    uri: '',
    name: 'Андрей',
    des: 'Бариста',
  },
];

const Barista = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={baristaData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{
          paddingHorizontal: 20,
          paddingBottom: 100,
        }}
        renderItem={({item, index}) => {
          return (
            <BaristaItem item={item} navigation={navigation}></BaristaItem>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <Text
              style={{
                marginTop: 16,
                marginBottom: 15,
                fontSize: 16,
                fontWeight: '600',
                color: '#001833'
              }}>
              Выберите бариста
            </Text>
          );
        }}></FlatList>
    </View>
  );
};

export default Barista;

const styles = StyleSheet.create({});
