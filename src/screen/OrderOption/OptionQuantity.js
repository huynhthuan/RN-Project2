import React, {useCallback} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

const OptionQuantity = ({qty, setOrder}) => {
  const minus = useCallback(() => {
    if (qty <= 1) return;
    setOrder(prevValue => {
      const newValue = {
        ...prevValue,
        qty: prevValue.qty - 1,
      };
      return newValue;
    });
  }, [qty]);

  const plus = useCallback(() => {
    setOrder(prevValue => {
      const newValue = {
        ...prevValue,
        qty: prevValue.qty + 1,
      };
      return newValue;
    });
  }, []);

  return (
    <View style={styles.qtyBtnGroup}>
      <TouchableOpacity onPress={minus}>
        <Text style={styles.qtyText}>-</Text>
      </TouchableOpacity>
      <Text style={[styles.qtyNumber, styles.qtyText]}>{qty}</Text>
      <TouchableOpacity onPress={plus}>
        <Text style={styles.qtyText}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OptionQuantity;

const styles = StyleSheet.create({
  qtyBtnGroup: {
    flexDirection: 'row',
    height: 30,
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: '#D8D8D8',
    width: 73,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 11,
  },
  qtyText: {
    fontSize: 14,
    color: '#001833',
  },
});
