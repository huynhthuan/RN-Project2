import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const OptionFlame = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sizeBtn}>
        <Image
          source={require('../../assets/icon/flame_s.png')}
          style={styles.sizeImage}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sizeBtn}>
        <Image
          source={require('../../assets/icon/flame_m.png')}
          style={styles.sizeImage}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sizeBtn}>
        <Image
          source={require('../../assets/icon/flame_l.png')}
          style={styles.sizeImage}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default OptionFlame;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  sizeBtn: {
    marginHorizontal: 14,
  },
  sizeImage: {
    marginBottom: 8,
  },
  sizeLabel: {
    fontSize: 14,
    color: '#000000',
  },
});
