import React, {useCallback} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const ItemSize = ({value, size, setOrder, uri}) => {
  const onChangeSize = useCallback(() => {
    setOrder(prevValue => {
      let newValue = {
        ...prevValue,
        size: value,
      };
      return newValue;
    });
  }, [value]);
  return (
    <TouchableOpacity style={styles.sizeBtn} onPress={onChangeSize}>
      <Image
        source={uri}
        style={[
          styles.sizeImage,
          {
            tintColor: value === size ? '#000' : '#D8D8D8',
          },
        ]}></Image>
      <Text style={styles.sizeLabel}>{value}</Text>
    </TouchableOpacity>
  );
};

const OptionSize = ({size, setOrder, initSize}) => {
  return (
    <View style={styles.container}>
      {initSize.map((item, index) => {
        return (
          <ItemSize
            value={item.value}
            key={item.value}
            setOrder={setOrder}
            size={size}
            uri={item.uri}></ItemSize>
        );
      })}
    </View>
  );
};

export default OptionSize;

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
