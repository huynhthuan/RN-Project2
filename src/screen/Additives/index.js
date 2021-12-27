import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';

const countryData = [
  {
    id: '1',
    title: 'AAAA',
  },
  {
    id: '2',
    title: 'AAAA',
  },
  {
    id: '3',
    title: 'AAAA',
  },
  {
    id: '4',
    title: 'AAAA',
  },
];

const ItemAdditives = ({item, navigation, isSelect}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('Desginer');
      }}
      style={{
        flexDirection: 'row',
        paddingVertical: 11,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#C6C6CB',
      }}>
      <Text
        style={{
          flex: 1,
          justifyContent: 'center',
          color: isSelect ? '#0A84FF' : '#000000',
        }}>
        {item.title}
      </Text>
      {!!isSelect && (
        <Image source={require('../../assets/icon/check.png')}></Image>
      )}
    </TouchableOpacity>
  );
};

const Additives = ({navigation}) => {
  const arrIndexSelect = [0, 2];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={countryData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{}}
        renderItem={({item, index}) => {
          return (
            <ItemAdditives
              item={item}
              navigation={navigation}
              isSelect={
                arrIndexSelect.findIndex(e => e === index) !== -1
              }></ItemAdditives>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <Text
              style={{
                marginTop: 16,
                color: '#001833',
                fontWeight: '600'
              }}>
              Выберите добавку
            </Text>
          );
        }}></FlatList>
    </View>
  );
};

export default Additives;

const styles = StyleSheet.create({});
