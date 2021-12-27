import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

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

export const OrderItem = ({item, isHistory}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderBottomWidth: 1,
        paddingTop: 13,
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <View>
        <Text
          style={{
            marginBottom: 10,
            color: 'rgba(50,74,89,0.22)',
          }}>
          24 aaaa | 12:30 | A 10:10
        </Text>
        <View style={{flexDirection: 'row'}}>
          <Image style={{}}></Image>
          <Text
            style={{
              fontSize: 10,
              marginLeft: 11,
              color: '#324A',
            }}>
            Consequuntur venenatis sed aperiam
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Image style={{}}></Image>
          <Text
            style={{
              fontSize: 10,
              marginLeft: 11,
              color: '#324A',
            }}>
            Consequuntur venenatis sed aperiam
          </Text>
        </View>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            color: isHistory ? 'rgba(50,74,89,0.6)' : '#324A59',
            fontWeight: '600',
            marginBottom: 4,
          }}>
          BYN 3.00
        </Text>
        <TouchableOpacity
          style={{
            paddingVertical: 8,
            paddingHorizontal: 16,
            borderRadius: 50,
            backgroundColor: '#324A59',
            justifyContent: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 10,
            }}>
            AAA
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const OrderTabHistory = () => {
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
          return <OrderItem item={item} isHistory={true}></OrderItem>;
        }}
        contentContainerStyle={{
          paddingHorizontal: 32,
        }}></FlatList>
    </View>
  );
};

export default OrderTabHistory;

const styles = StyleSheet.create({});
