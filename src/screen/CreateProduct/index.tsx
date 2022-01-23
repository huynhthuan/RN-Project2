import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Button} from 'react-native-ui-lib';
import api from '../../api';
import InputCustom from '../../components/InputCustom';
export default function CreateProduct() {
  const [productInfo, setProductInfo] = React.useState({
    name: '',
  });
  const [loading, setLoading] = React.useState(false);

  const onCreateProduct = React.useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch(api.createProduct, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: productInfo.name,
        }),
      });

      const resJson = await res.json();
      setProductInfo(prev => ({...prev, name: ''}));
      setLoading(false);
      console.log('resJson', resJson);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [productInfo]);

  return (
    <View flex padding-20>
      <InputCustom
        icon={require('../../assets/icon/user.png')}
        placeholder={'Enter name product'}
        keyboardType={'text'}
        value={productInfo.name}
        onChangeText={name => {
          setProductInfo(prev => ({...prev, name}));
        }}
      />
      <Button onPress={onCreateProduct} disabled={!!loading}>
        <Text white>Create Product</Text>
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});
