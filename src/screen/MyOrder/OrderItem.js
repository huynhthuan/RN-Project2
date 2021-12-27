import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

const OrderItem = ({img, name, price, qty, desc}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderRadius: 15,
        backgroundColor: '#F7F8FB',
        paddingHorizontal: 10,
        paddingVertical: 18,
        alignItems: 'center',
        marginBottom: 20,
      }}>
      <View
        style={{
          marginRight: 10,
        }}>
        <Image source={img}></Image>
      </View>
      <View
        style={{
          marginRight: 16,
          flex: 1,
        }}>
        <Text
          style={{
            fontSize: 12,
            color: '#001833',
          }}>
          {name}
        </Text>
        <Text
          style={{
            fontSize: 10,
            color: '#757575',
          }}>
          {desc}
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'rgba(0, 0, 0, 0.57)',
          }}>
          x {qty}
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontSize: 16,
            fontWeight: '600',
            color: '#001833',
          }}>
          BYN{'\n'} {price}
        </Text>
      </View>
    </View>
  );
};

export default OrderItem;

const styles = StyleSheet.create({});
