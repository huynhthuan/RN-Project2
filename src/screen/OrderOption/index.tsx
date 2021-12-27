import React, { useState, useMemo, useContext, createContext } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageURISource,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import OptionType from './OptionType';
import OptionQuantity from './OptionQuantity';
import OptionKind from './OptionKind';
import OptionSize from './OptionSize';
import OptionSwitch from './OptionSwitch';
import { useNavigation, useRoute } from '@react-navigation/core';
const { width, height } = Dimensions.get('window');

export enum Etype {
  one = 0,
  two = 1
}

export enum EKind {
  hot = 0,
  cold = 1
}

export enum ESize {
  s250 = 0,
  s230 = 1,
  s450 = 2
}


export interface IObjOrder {
  title: string,
  image: ImageURISource,
  qty: number,
  type: Etype,
  kind: EKind,
  size: ESize,
  enableTime: boolean,
}

export interface IOrderContext {
  order: IObjOrder,
  setOrder: React.Dispatch<React.SetStateAction<IObjOrder>>
  initValue: {
    type: {
      value: number,
      name: string
    }[],
    kind: {
      value: number,
      uri: ImageURISource
    }[],
    size: {
      value: number,
      uri: ImageURISource
    }[]
  }
}

export const OrderOptionsContext = React.createContext<IOrderContext>({
  order: {
    title: '',
    image: require('../../assets/icon/arrow-left.png'),
    qty: 0,
    type: 0 | 1,
    kind: 0 | 1,
    size: 0 | 1 | 2,
    enableTime: false,
  },
  setOrder: () => { },
  initValue: {
    type: [],
    kind: [],
    size: [],
  },
});

const OrderOption = () => {
  const navigation = useNavigation();
  const initValue = useMemo(() => {
    return {
      type: [
        {
          value: 0,
          name: 'Один',
        },
        {
          value: 1,
          name: 'Два',
        },
      ],
      kind: [
        {
          value: 0,
          uri: require('../../assets/icon/hot.png'),
        },
        {
          value: 1,
          uri: require('../../assets/icon/cold.png'),
        },
      ],
      size: [
        {
          value: 250,
          uri: require('../../assets/icon/size-s.png'),
        },
        {
          value: 350,
          uri: require('../../assets/icon/size-m.png'),
        },
        {
          value: 450,
          uri: require('../../assets/icon/size-l.png'),
        },
      ],
    };
  }, []);

  const route = useRoute();
  const item = route.params.item;

  const [order, setOrder] = useState<IObjOrder>({
    title: item.title,
    image: item.image,
    qty: 1,
    type: 0,
    kind: 1,
    size: 250,
    enableTime: false,
  });

  return (
    <OrderOptionsContext.Provider value={{ order, setOrder, initValue }}>
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
          <View style={styles.itemAva}>
            <Image source={order.image}></Image>
          </View>

          <View style={styles.orderOptions}>
            <Text style={styles.itemName}>{order.title}</Text>
            <OptionQuantity
              qty={order.qty}
              setOrder={setOrder}></OptionQuantity>
          </View>

          <View style={styles.orderOptions}>
            <Text style={styles.itemName}>Ристретто</Text>
            <OptionType
            ></OptionType>
          </View>

          <View style={styles.orderOptions}>
            <Text style={styles.itemName}>На месте / навынос</Text>
            <OptionKind
            ></OptionKind>
          </View>

          <View style={styles.orderOptions}>
            <Text style={styles.itemName}>Объем, мл</Text>
            <OptionSize
              size={order.size}
              setOrder={setOrder}
              initSize={initValue['size']}></OptionSize>
          </View>

          <View style={[styles.orderOptions, styles.optionGroupCol]}>
            <View style={styles.switchGroup}>
              <Text style={styles.itemName}>
                Приготовить к определенному{'\n'}времени сегодня?
              </Text>
              <OptionSwitch
                enableTime={order.enableTime}
                setOrder={setOrder}></OptionSwitch>
            </View>
            <View style={styles.timeGroup}>
              <Text style={styles.timeText}>18 : 10</Text>
            </View>
          </View>

          <LinearGradient
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            colors={['#C58BF2', '#EEA4CE']}
            style={styles.linearGradient}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Barista');
              }}
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Image source={require('../../assets/icon/settings.png')}></Image>

              <Text
                style={{
                  flex: 1,
                  marginLeft: 11,
                  color: '#fff',
                  fontWeight: '700',
                }}>
                Конструктор кофемана
              </Text>
              <Image
                source={require('../../assets/icon/icon_arrrow_right_small.png')}></Image>
            </TouchableOpacity>
          </LinearGradient>

          <View style={[styles.orderOptions, styles.totalOption]}>
            <Text style={styles.totalLabel}>Итоговая сумма</Text>
            <Text style={styles.totalPrice}>BYN 3.00</Text>
          </View>
          <TouchableOpacity style={styles.btnOrder}>
            <Text style={{ color: '#fff' }}>Далее</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </OrderOptionsContext.Provider>
  );
};

export default OrderOption;

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
