import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const ItemStore = ({title, navigation}) => {
  return (
    <LinearGradient
      start={{x: 0, y: 0.5}}
      end={{x: 1, y: 0.5}}
      colors={['#C58BF2', '#EEA4CE']}
      style={styles.linearGradient}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MainTab');
        }}
        style={{
          flexDirection: 'row',
        }}>
        <Image source={require('../../assets/icon/store.png')}></Image>

        <Text
          style={{
            flex: 1,
            marginLeft: 11,
            color: '#fff',
            fontWeight: '700',
          }}>
          {title}
        </Text>
        <Image
          source={require('../../assets/icon/icon_arrrow_right_small.png')}></Image>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const SelectCoffee = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.map}></View>
      <View style={styles.content}>
        <View style={styles.wrapSelect}>
          <Text style={styles.title}>Выберите кофейню Magic Coffee</Text>
          <View style={styles.wrapItem}>
            <ItemStore
              navigation={navigation}
              title={'ул. Тимирязева, 67 '}></ItemStore>
            <ItemStore
              navigation={navigation}
              title={'ул. Кальварийская, 58 '}></ItemStore>
            <ItemStore
              navigation={navigation}
              title={'ул. Мельникайте, 15 '}></ItemStore>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SelectCoffee;

const styles = StyleSheet.create({
  linearGradient: {
    paddingTop: 14,
    paddingLeft: 17,
    paddingBottom: 13,
    paddingRight: 13,
    borderRadius: 16,
    marginVertical: 4,
  },
  container: {
    flex: 1,
  },
  content: {
    flexDirection: 'column-reverse',
  },
  map: {
    flex: 1,
    backgroundColor: 'yellow',
  },
  wrapSelect: {
    backgroundColor: '#324A59',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    alignSelf: 'center',
    marginVertical: 27,
    color: '#FFF',
    fontSize: 14,
    fontWeight: '700',
  },
  wrapItem: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
});
