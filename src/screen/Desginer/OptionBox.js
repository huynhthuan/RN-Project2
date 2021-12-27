import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const OptionBox = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sizeBtn}>
        <Image
          source={require('../../assets/icon/box_s.png')}
          style={styles.sizeImage}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sizeBtn}>
        <Image
          source={require('../../assets/icon/box_m.png')}
          style={styles.sizeImage}></Image>
      </TouchableOpacity>
      <TouchableOpacity style={styles.sizeBtn}>
        <Image
          source={require('../../assets/icon/box_l.png')}
          style={styles.sizeImage}></Image>
      </TouchableOpacity>
    </View>
  );
};

export default OptionBox;

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
