import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Popup = ({setVisible}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
      }}>
      <View
        style={{
          paddingVertical: 27,
          paddingHorizontal: 36,
          backgroundColor: '#C58BF2',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>
        <Text
          style={{
            fontSize: 20,
            lineHeight: 28,
            textAlign: 'center',
            marginBottom: 30,
            color: '#fff',
          }}>
          Энциклопедия кофемана
        </Text>
        <Text
          style={{
            color: '#fff',
            marginBottom: 22,
          }}>
          Бленд, состоящий из 90% арабики и 10% робусты, считается классическим
          для итальянского эспрессо. Не советуем создавать бленд с содержанием
          робусты более 30%.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              color: '#fff',
            }}
            onPress={() => {
              setVisible(false);
            }}>
            Пропустить
          </Text>
          <View></View>
          <Text
            style={{
              color: '#fff',
            }}>
            Далее
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Popup;

const styles = StyleSheet.create({});
