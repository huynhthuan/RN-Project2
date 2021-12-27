import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {OrderItem} from '../OrderTabHistory';

const data = [
  {
    id: '1',
    time: 'AAAAA',
    cup: 'BBBB',
    location: 'CCCC',
    price: 'BYN 3.00',
  },
  {
    id: '2',
    time: 'AAAAA',
    cup: 'BBBB',
    location: 'CCCC',
    price: 'BYN 3.00',
  },
  {
    id: '3',
    time: 'AAAAA',
    cup: 'BBBB',
    location: 'CCCC',
    price: 'BYN 3.00',
  },
  {
    id: '4',
    time: 'AAAAA',
    cup: 'BBBB',
    location: 'CCCC',
    price: 'BYN 3.00',
  },
];

const OrderTabCurrent = () => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
      }}>
      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => {
          return <OrderItem item={item} isHistory={false}></OrderItem>;
        }}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}></FlatList>
    </View>
  );
};

export default OrderTabCurrent;

const styles = StyleSheet.create({});
