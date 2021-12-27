import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
} from 'react-native';
import OrderItem from './OrderItem';
import Popup from './Popup';
 
const data = [
  {
    img: require('../../assets/icon/order_item.png'),
    name: 'Американо',
    desc: 'single | iced | medium | full ice',
    qty: 1,
    price: '3.0',
  },
  {
    img: require('../../assets/icon/order_item.png'),
    name: 'Капучино',
    desc: 'single | iced | medium | full ice',
    qty: 1,
    price: '3.0',
  },
  {
    img: require('../../assets/icon/order_item.png'),
    name: 'Флэт Уайт',
    desc: 'single | iced | medium | full ice',
    qty: 1,
    price: '3.0',
  },
  {
    img: require('../../assets/icon/order_item.png'),
    name: 'Капучино',
    desc: 'single | iced | medium | full ice',
    qty: 1,
    price: '3.0',
  },
];

const MyOrder = ({navigation}) => {
  const refPopup = React.useRef();
  console.log(refPopup);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
      }}>
      <Text
        style={{
          fontSize: 20,
          lineHeight: 24,
          fontWeight: '600',
          color: '#001833',
          marginBottom: 24,
        }}>
        Мой заказ
      </Text>
      <View>
        {data.map((item, index) => {
          return (
            <OrderItem
              key={index}
              img={item.img}
              name={item.name}
              desc={item.desc}
              qty={item.qty}
              price={item.price}></OrderItem>
          );
        })}
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            marginRight: 44,
          }}>
          <Text
            style={{
              fontSize: 12,
              color: 'rgba(0,24,51,.22)',
            }}>
            Итоговая сумма
          </Text>
          <Text
            style={{
              fontSize: 22,
              color: '#001833',
              fontWeight: '600',
            }}>
            BYN 9.00
          </Text>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              refPopup.current?.open();
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              backgroundColor: '#324A59',
              borderRadius: 30,
              height: 52,
              width: 162,
            }}>
            <Image
              style={{tintColor: '#fff'}}
              source={require('../../assets/icon/cart.png')}></Image>
            <Text style={{color: '#fff'}}>Далее</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Popup ref={refPopup} />
    </View>
  );
};

export default MyOrder;

const styles = StyleSheet.create({});
