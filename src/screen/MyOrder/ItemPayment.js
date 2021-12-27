import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';

const ItemPayment = ({name, uri, des}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image source={require('../../assets/icon/selectInActive.png')} />
      <View style={styles.content}>
        <Text style={styles.txtName}>{name}</Text>
        <Text style={styles.txtDes}>{des}</Text>
      </View>
      <Image source={uri} />
    </TouchableOpacity>
  );
};

export default ItemPayment;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F8FB',
    padding: 16,
    borderRadius: 12,
    marginBottom: 19,
  },
  content: {
    flex: 1,
    marginLeft: 16,
  },
  txtName: {
    fontSize: 14,
    color: '#001833',
    marginBottom: 6,
    fontWeight: '600',
  },
  txtDes: {
    fontSize: 10,
    color: 'rgba(0, 24, 51, 0.22)',
  },
});
