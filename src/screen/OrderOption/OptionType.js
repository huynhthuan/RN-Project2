import React, {useCallback, memo} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {OrderOptionsContext} from '.';

const ItemType = ({value, name}) => {
  const {order, setOrder} = React.useContext(OrderOptionsContext);

  const onChangeType = useCallback(() => {
    setOrder(prevValue => {
      const newValue = {
        ...prevValue,
        type: value,
      };
      return newValue;
    });
  }, [value]);

  return (
    <TouchableOpacity
      style={[
        styles.optionBtn,
        {
          borderColor: order.type === value ? '#324A59' : '#D8D8D886',
        },
      ]}
      onPress={onChangeType}>
      <Text style={styles.typeText}>{name}</Text>
    </TouchableOpacity>
  );
};

const OptionType = React.memo(({initValue}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      {initValue?.type.map((item, index) => {
        return (
          <ItemType name={item.name} value={item.value} key={index}></ItemType>
        );
      })}
    </View>
  );
});

const WrapOptionType = () => {
  const {initValue} = React.useContext(OrderOptionsContext);
  return <OptionType initValue={initValue}></OptionType>;
};

export default WrapOptionType;

const styles = StyleSheet.create({
  optionBtn: {
    height: 30,
    borderRadius: 50,
    borderWidth: 1.2,
    borderColor: '#D8D8D8',
    width: 73,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 4,
  },
  typeText: {
    color: '#001833',
  },
});
