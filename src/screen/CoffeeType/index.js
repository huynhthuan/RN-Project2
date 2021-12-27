import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

const countryData = [
  {
    id: '1',
    title: 'AAAA',
  },
  {
    id: '2',
    title: 'AAAA',
  },
  {
    id: '3',
    title: 'AAAA',
  },
  {
    id: '4',
    title: 'AAAA',
  },
];

const {width, height} = Dimensions.get('window');

const ItemType = ({
  item,
  navigation,
  isSelect,
  index,
  setArrIndexSelect,
  arrIndexSelect,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        let indexInArr = arrIndexSelect.findIndex(e => e === index);
        if (indexInArr === -1) {
          setArrIndexSelect([...arrIndexSelect, index]);
        } else {
          arrIndexSelect.splice(indexInArr, 1);
          setArrIndexSelect([...arrIndexSelect]);
        }
      }}
      style={{
        flexDirection: 'row',
        paddingVertical: 11,
        alignItems: 'center',
        borderBottomWidth: 0.5,
        borderBottomColor: '#C6C6CB',
      }}>
      <Text
        style={{
          flex: 1,
          justifyContent: 'center',
          marginTop: 16,
          color: isSelect ? '#0A84FF' : '#000000',
        }}>
        {item.title}
      </Text>
      <Image
        source={require('../../assets/icon/icon_arrrow_right_small.png')}></Image>
    </TouchableOpacity>
  );
};

const CoffeeType = ({navigation}) => {
  // const indexSelect = 1;
  const [arrIndexSelect, setArrIndexSelect] = useState([0, 3]);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#ffffff',
        paddingHorizontal: 16,
      }}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={countryData}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={{}}
        renderItem={({item, index}) => {
          return (
            <ItemType
              item={item}
              navigation={navigation}
              isSelect={arrIndexSelect.findIndex(e => e === index) !== -1}
              index={index}
              setArrIndexSelect={setArrIndexSelect}
              arrIndexSelect={arrIndexSelect}></ItemType>
          );
        }}
        ListHeaderComponent={() => {
          return (
            <Text
              style={{
                marginTop: 16,
                color: '#001833',
                fontSize: 16,
                fontWeight: '600',
              }}>
              Выберите сорт кофе
            </Text>
          );
        }}></FlatList>
      <TouchableOpacity
        style={styles.btnOrder}
        onPress={() => {
          navigation.navigate('Additives');
        }}>
        <Text style={{color: '#fff'}}>Далее</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoffeeType;

const styles = StyleSheet.create({
  btnOrder: {
    width: width - 50,
    height: 46,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#324A59',
    marginBottom: 100,
  },
});
