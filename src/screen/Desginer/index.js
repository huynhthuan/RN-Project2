import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

import Slider from '@react-native-community/slider';

import OptionType from '../OrderOption/OptionType';
import OptionFlame from './OptionFlame';
import OptionBeans from './OptionBeans';
import OptionBox from './OptionBox';

const {width, height} = Dimensions.get('window');

const Desginer = ({navigation}) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: '#fff',
      }}
      contentContainerStyle={{
        paddingBottom: 100,
        paddingTop: 24,
      }}>
      <View style={styles.container}>
        <TouchableOpacity style={styles.orderOptions}>
          <Text style={styles.itemName}>Выберите бариста</Text>
          <Image source={require('../../assets/icon/chevron.png')}></Image>
        </TouchableOpacity>

        <TouchableOpacity style={styles.orderOptions}>
          <Text style={styles.itemName}>Вид кофе </Text>
          <View style={{}}>
            <Slider
              style={{width: 228, height: 43}}
              minimumValue={0}
              maximumValue={1}
              minimumTrackTintColor="#007AFF"
              maximumTrackTintColor="#000000"
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{
                  color: '#D8D8D8',
                  fontSize: 12,
                }}>
                Арабика
              </Text>
              <Text
                style={{
                  color: '#D8D8D8',
                  fontSize: 12,
                }}>
                Робуста
              </Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.orderOptions}>
          <Text style={styles.itemName}>Сорт кофе</Text>
          <Image source={require('../../assets/icon/chevron.png')}></Image>
        </TouchableOpacity>

        <View style={styles.orderOptions}>
          <Text style={styles.itemName}>Обжарка</Text>
          <OptionFlame></OptionFlame>
        </View>

        <View style={styles.orderOptions}>
          <Text style={styles.itemName}>Помол</Text>
          <OptionBeans></OptionBeans>
        </View>

        <TouchableOpacity style={styles.orderOptions}>
          <Text style={styles.itemName}>Молоко</Text>
          <Text style={{color: '#001833'}}>Выбрать</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.orderOptions}>
          <Text style={styles.itemName}>Сироп</Text>
          <Text style={{color: '#001833'}}>Выбрать</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.orderOptions}
          onPress={() => {
            navigation.navigate('Recommentaion');
          }}>
          <Text style={styles.itemName}>Добавки</Text>
          <Image source={require('../../assets/icon/chevron.png')}></Image>
        </TouchableOpacity>

        <View style={styles.orderOptions}>
          <Text style={styles.itemName}>Лед</Text>
          <OptionBox></OptionBox>
        </View>

        <View style={[styles.orderOptions, styles.totalOption]}>
          <Text style={styles.totalLabel}>Итоговая сумма</Text>
          <Text style={styles.totalPrice}>BYN 9.00</Text>
        </View>
        <TouchableOpacity
          style={styles.btnOrder}
          onPress={() => {
            navigation.navigate('MyOrder');
          }}>
          <Text style={{color: '#fff'}}>Далее</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Desginer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 25,
  },
  itemAva: {
    width: width - 50,
    height: ((width - 50) / 325) * 146,
    borderRadius: 12,
    backgroundColor: '#F7F8FB',
    alignItems: 'center',
    justifyContent: 'center',
  },
  orderOptions: {
    paddingVertical: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#F4F5F7',
  },
  itemName: {
    fontSize: 14,
    color: '#001833',
  },
  switchGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: width - 50,
    marginBottom: 16,
    // flex: 1,
  },
  timeGroup: {
    width: 86,
    height: 36,
    borderRadius: 6,
    backgroundColor: 'rgba(118,118,128,.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 22,
    color: '#000000',
  },
  optionGroupCol: {
    flexDirection: 'column',
    alignItems: 'flex-end',
    borderBottomWidth: 0,
  },
  linearGradient: {
    paddingTop: 14,
    paddingLeft: 17,
    paddingBottom: 13,
    paddingRight: 13,
    borderRadius: 16,
    marginVertical: 4,
  },
  totalLabel: {
    fontSize: 16,
    color: '#001833',
    fontWeight: '600',
  },
  totalPrice: {
    fontSize: 16,
    color: '#001833',
    fontWeight: '600',
  },
  totalOption: {
    borderBottomWidth: 0,
    marginTop: 50,
  },
  btnOrder: {
    width: width - 50,
    height: 46,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#324A59',
  },
});
