import React, { useCallback } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, ImageSourcePropType } from 'react-native';
import { EKind, IOrderContext, OrderOptionsContext } from '.';

interface PropsItem {
  uri: ImageSourcePropType,
  value: EKind
}

const ItemKind = ({ value, uri }: PropsItem) => {
  const { order, setOrder } = React.useContext(OrderOptionsContext);

  const _onPress = useCallback(() => {
    setOrder(prevValue => {
      const newValue = {
        ...prevValue,
        kind: value,
      };
      return newValue;
    });
  }, [value]);

  return (
    <TouchableOpacity style={styles.kindBtn} onPress={_onPress}>
      <Image
        style={{
          tintColor: value === order.kind ? '#000' : '#D8D8D8',
        }}
        source={uri}></Image>
    </TouchableOpacity>
  );
};

const OptionKind = () => {
  const OrderContext = React.useContext<IOrderContext>(OrderOptionsContext);
  return (
    <View style={styles.container}>
      {OrderContext?.initValue?.kind.map((item, index) => {
        return (
          <ItemKind value={item.value} uri={item.uri} key={index}></ItemKind>
        );
      })}
    </View>
  );
};

export default OptionKind;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kindBtn: {
    marginHorizontal: 15,
  },
});
