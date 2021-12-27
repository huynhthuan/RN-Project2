import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const OptionBeans = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.kindBtn}>
        <Image source={require('../../assets/icon/beans_s.png')}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.kindBtn}>
        <Image source={require('../../assets/icon/beans_l.png')}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default OptionBeans;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kindBtn: {
    marginHorizontal: 15,
  },
});
