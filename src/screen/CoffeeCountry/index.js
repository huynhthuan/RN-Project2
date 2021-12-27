import React, {useState} from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const countryData = [
  {
    id: '1',
    title: 'Бразилия',
  },
  {
    id: '2',
    title: 'Колумбия',
  },
  {
    id: '3',
    title: 'Коста-рика',
  },
  {
    id: '4',
    title: 'Ямайка',
  },
];

const ItemCountry = ({item, navigation, isSelect, index, setIndexSelect}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('CoffeeType');
        setIndexSelect(index);
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
          marginTop: 16,
          color: isSelect ? '#0A84FF' : '#000000',
        }}>
        {item.title}
      </Text>
      <Image source={require('../../assets/icon/chevron.png')}></Image>
    </TouchableOpacity>
  );
};

const CoffeeCountry = ({navigation}) => {
  // const indexSelect = 0;
  const [indexSelect, setIndexSelect] = useState(0);
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
            <ItemCountry
              item={item}
              navigation={navigation}
              isSelect={index === indexSelect}
              index={index}
              setIndexSelect={setIndexSelect}></ItemCountry>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <Text
              style={{
                marginTop: 16,
                fontSize: 16,
                color: '#001833',
              }}>
              Выберите страну и сорт кофе
            </Text>
          );
        }}></FlatList>
    </View>
  );
};

export default CoffeeCountry;

const styles = StyleSheet.create({});
