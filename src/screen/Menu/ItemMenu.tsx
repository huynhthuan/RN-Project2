import {NavigationProp, useNavigation} from '@react-navigation/core';
import {EntityId} from '@reduxjs/toolkit';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Animated,
} from 'react-native';
import {IDataCoffee} from '.';
import {useAppSelector} from '../../controller/store';
import {StoreStackParamList} from '../../nav/MenuStack';

const {height, width} = Dimensions.get('window');

const spacing = 26;

const widthItem = (width - spacing * 2 - 16) / 2;
const heightItem = (widthItem / 154) * 164;

interface Props {
  index: number;
  id: EntityId;
}

const ItemMenu = ({index, id}: Props) => {
  const navigation = useNavigation<NavigationProp<StoreStackParamList>>();
  const opacityValue = React.useRef(new Animated.Value(0)).current;
  const transX = React.useRef(new Animated.Value(100)).current;
  const entitieProduct = useAppSelector(state => state.productsSlice.entities);
  const item = entitieProduct[id];

  React.useEffect(() => {
    const animOpacity = Animated.timing(opacityValue, {
      toValue: 1,
      duration: 250,
      useNativeDriver: true,
      delay: index * 250,
    });

    const animTransX = Animated.timing(transX, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
      delay: index * 250,
    });

    Animated.parallel([animOpacity, animTransX]).start();
  }, []);

  if (!item) return null;
  
  console.log(item);

  return (
    <Animated.View
      style={[
        styles.container,
        {
          opacity: opacityValue,
        },
      ]}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('OrderOption', {
            item: item,
          });
        }}
        style={styles.content}>
        <Image source={{uri: item.avatar}} style={styles.image}></Image>
        <Text style={styles.name}>{item.name}</Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ItemMenu;

const styles = StyleSheet.create({
  container: {
    width: widthItem,
    height: heightItem,
    borderRadius: 20,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    marginBottom: 12,
    width: 100,
    height: 100,
  },
  name: {
    fontSize: 14,
    color: '#001833',
  },
});
